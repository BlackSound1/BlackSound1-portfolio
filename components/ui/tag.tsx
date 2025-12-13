import { ReactElement } from "react";

interface TagProps {
    lang: string;
    key: string;
    _color: string;
}

export default function Tag({lang, key, _color}: TagProps): ReactElement {
    return <span 
                className="tag bg-surface0 rounded px-2 py-1 font-semibold"
                style={{color: _color}}
            >{lang}
            </span>;
}
