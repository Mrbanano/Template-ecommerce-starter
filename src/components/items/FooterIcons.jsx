import React from 'react'
import FooterIcon from './FooterIcon'

export default function FooterIcons({FooterItems}) {
    return (
        <div>
            {
                FooterItems.map((icon,index)=>(
                    <FooterIcon key={"Footer.icon-"+index} icon={icon}/>
                ))
            }
        </div>
    )
}
