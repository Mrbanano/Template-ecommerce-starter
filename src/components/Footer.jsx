import React from "react"
import Banner from "./Banner"
import FooterIcons from "./items/FooterIcons"


export default function Footer({socialItems,FooterItems,Company}) {
    
    return (
        <footer className="Footer">
            <Banner></Banner>
            <div className="Footer-container">
                <div className="Footer-content">
                    <div className="Footer-body">
                        <FooterIcons FooterItems={FooterItems}/>
                        <div className="Footer-body-logo">
                            <img src={Company.logo}alt="logo" />
                        </div>
                        <div className="Footer-body-nav"></div>
                    </div>
                    <div className="Footer-footer">
                        <div className="Footer-footer-social">
                            {socialItems.map((item, index) =>
                                item.url === "" ? (
                                    ""
                                ) : (
                                    <div key={index * 100 + "_" + item.name}>
                                        <div className="icon-img">
                                            <a href={item.url}>
                                                <img src={item.icon} alt={item.name} />
                                            </a>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                        <div className="Footer-footer-copy">
                            <p>
                                Diseñado con{" "}
                                <span role="img" aria-label="heart">
                                    ❤️
                                </span>{" "}
                                en <span>
                                    <a href={Company.url}>{Company.name}</a>
                                    </span>
                                    
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
