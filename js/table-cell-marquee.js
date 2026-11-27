// Scrolls truncated table-cell text in an endless loop while the cell is hovered
const MARQUEE_CELL_SELECTOR =
  ".second-menu__table-cnr td, .station-info__table-cnr td";
const MARQUEE_SPEED_PX_PER_S = 40;
// Empty space between the end of the text and the copy that follows it
const MARQUEE_GAP_PX = 32;

// Text lives in a span so the cell can keep its ellipsis while idle.
// Created lazily on hover, so rendering code stays untouched.
function getTextSpan(cell) {
  let span = cell.querySelector(":scope > .cell-text");
  if (!span) {
    span = document.createElement("span");
    span.className = "cell-text";
    span.append(...cell.childNodes);
    cell.append(span);
  }
  return span;
}

function measureCell(cell, span) {
  const style = getComputedStyle(cell);
  return {
    textWidth: span.getBoundingClientRect().width,
    contentWidth:
      cell.clientWidth -
      parseFloat(style.paddingLeft) -
      parseFloat(style.paddingRight),
  };
}

function startMarquee(event) {
  const cell = event.target.closest(MARQUEE_CELL_SELECTOR);
  if (!cell || cell.classList.contains("is-marquee")) return;

  const span = getTextSpan(cell);
  const { textWidth, contentWidth } = measureCell(cell, span);
  if (textWidth - contentWidth <= 0.5) return; // text fits, nothing to scroll

  // One loop moves by exactly (text + gap), so the CSS copy lands where the original began
  const loopDistance = textWidth + MARQUEE_GAP_PX;
  span.dataset.text = span.textContent; // source for the copy drawn by ::after
  cell.style.setProperty("--marquee-gap", `${MARQUEE_GAP_PX}px`);
  cell.style.setProperty("--marquee-distance", `${loopDistance}px`);
  cell.style.setProperty(
    "--marquee-duration",
    `${loopDistance / MARQUEE_SPEED_PX_PER_S}s`,
  );
  cell.classList.add("is-marquee");
}

function stopMarquee(event) {
  const cell = event.target.closest(MARQUEE_CELL_SELECTOR);
  // Ignore moves between the cell and its own children
  if (!cell || cell.contains(event.relatedTarget)) return;
  cell.classList.remove("is-marquee");
}

document.addEventListener("mouseover", startMarquee);
document.addEventListener("mouseout", stopMarquee);
