import React from 'react';

type svgProps = React.SVGProps<SVGSVGElement>;

interface IconProps extends svgProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    width: number;
    height: number;
}

export const Icon = (props: IconProps) => {
    const {
        className,
        Svg,
        width = 22,
        height = 22,
        ...otherProps
    } = props;

    return (
        <Svg
            className={className}
            width={width}
            height={height}
            {...otherProps}
        />
    );
};
