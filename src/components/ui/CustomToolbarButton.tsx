import React from 'react';

const CustomToolbarButton = (props: {text: string, icon: string, onClick: React.MouseEventHandler<HTMLButtonElement>}) => (
    <div>
        <button className={`border rounded-full p-5 text-sm bg-white hover:bg-gray-200 border-black tracking-widest uppercase`}
                onClick={props.onClick}>
            <i className={props.icon}/>
            &nbsp;
            {props.text}
        </button>
    </div>
);

export default CustomToolbarButton;