import TooltipService, { Position } from './TooltipService';

const hideTooltip = (tooltipEl) => {
    tooltipEl.classList.add('hide');
    tooltipEl.classList.remove('show');
}

const showTooltip = (tooltipEl) => {
    tooltipEl.classList.add('show');
    tooltipEl.classList.remove('hide');
}

const useTooltip = () => {
    const renderTooltip = (tooltipRef, isOpen, position) => {        
        if (isOpen) {
            const tooltipPosition = TooltipService.getTooltipPosition(tooltipRef.current, position ? position : Position.TOP);
            console.log('########################## tooltipPosition', tooltipPosition)
            if (tooltipPosition.top) {
                tooltipRef.current.style.top = `${tooltipPosition.top}px`;
                tooltipRef.current.style.bottom = null;
            } 
            if (tooltipPosition.left) {
                tooltipRef.current.style.left = `${tooltipPosition.left}px`;
                tooltipRef.current.style.right = null;
            }
            if (tooltipPosition.right) {
                tooltipRef.current.style.right = `${tooltipPosition.right}px`;
                tooltipRef.current.style.left = null;
            }
            if (tooltipPosition.bottom) {
                tooltipRef.current.style.bottom = `${tooltipPosition.bottom}px`;
                tooltipRef.current.style.top = null;
            }
            showTooltip(tooltipRef.current)
        } else {
            hideTooltip(tooltipRef.current)
        }
    }
    return (elementRef) => {
        return {
            open: (position) => renderTooltip(elementRef, true, position),
            close: () => renderTooltip(elementRef, false)
        }
    }

}

export default useTooltip