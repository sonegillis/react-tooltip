
export const Position  = {
  TOP: 0,
  TOP_RIGHT: 1,
  RIGHT: 2,
  BOTTOM_RIGHT: 3,
  BOTTOM: 4,
  BOTTOM_LEFT: 5,
  LEFT: 6,
  TOP_LEFT: 7,
}

class TooltipService {
    static POSTION_GAP = 5;

    static getTooltipPosition (tooltipEl, position) {
        const elRect = tooltipEl.getBoundingClientRect();
        const containerElRect = tooltipEl.parentElement.getBoundingClientRect();

        const defaultPosition = {
            bottom: -1 * (elRect.height + this.POSTION_GAP),
            left: '0'
        }

        if (position === Position.TOP) {
          return {
            top: -1 * (elRect.height + this.POSTION_GAP),
            left: '0'
          }
        } else if (position === Position.TOP_RIGHT) {
          return {
            top: -1 * (elRect.height + this.POSTION_GAP),
            right: -1 * (elRect.width + this.POSTION_GAP)
          }
        } else if (position === Position.BOTTOM_RIGHT) {
          return {
            bottom: -1 * (containerElRect.height + this.POSTION_GAP),
            right: -1 * (elRect.width + this.POSTION_GAP)
          }
        } else if (position === Position.BOTTOM_LEFT) {
          return {
            bottom: -1 * (containerElRect.height + this.POSTION_GAP),
            left:  -1 * (elRect.width + this.POSTION_GAP)
          }
        } else if (position === Position.TOP_LEFT) {
          return {
            top: -1 * (elRect.height + this.POSTION_GAP),
            left: -1 * (elRect.width + this.POSTION_GAP)
          }
        } else if (position === Position.LEFT) {
          return {
            top: '0',
            left: -1 * (elRect.width + this.POSTION_GAP)
          }
        } else if (position === Position.RIGHT) {
          return {
            top: '0',
            right: -1 * (elRect.width + this.POSTION_GAP)
          }
        } else {
          return defaultPosition;
        }
    }
}

export default TooltipService