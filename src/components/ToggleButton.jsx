'use client';
import { CTAButton } from './ComponentsMemo';
import { ChevronDown, ChevronUp } from 'lucide-react';

function ToggleButton({ onClick, isShowingMore }) {
    return (
        <CTAButton
            onClick={onClick}
            text={isShowingMore ? "See Less" : "See More"}
            icon={isShowingMore ? ChevronUp : ChevronDown}
            className="w-auto"
        />
    );
}

export { ToggleButton };
