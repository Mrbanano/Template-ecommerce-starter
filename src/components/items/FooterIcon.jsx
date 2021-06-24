import React from 'react'

export default function FooterIcon({ icon }) {
    return (
        <div className="Icon">
            <div className="Icon-containter">
                <div className="Icon-content">
                    <div className="Icon-image">
                        <img src={icon.icon} alt={icon.title} />
                    </div>
                    <div className="Icon-text">
                        <p className="Icon-title">
                            {icon.title}
                        </p>
                        <p className="Icon-subtitle">
                            {icon.subtile}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
