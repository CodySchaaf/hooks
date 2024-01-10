import {memo, useRef} from "react";

interface Props {
    config: {
        appTitle: string;
        appColor: string;
    }
}

export const MyExpensiveComponent = memo(({config}: Props) => {
    const ref = useRef(0)
    ref.current++
    return (
        <div>
        <div>{ref.current}</div>
        <div>{JSON.stringify(config)}</div>
        </div>
    )
})