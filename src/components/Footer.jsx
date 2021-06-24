import React from "react"

export default function Footer({socialItems}) {
    
    return (
        <footer className="Footer">
            <div className="Footer-container">
                <div className="Footer-content">
                    <div className="Footer-body">
                        <div className="Footer-body-logo">
                            <img src="https://i.postimg.cc/B6kYhnfP/logo.png" alt="logo" />
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
                                    <a href="https://servivo.digital/">Servivo Digital</a>
                                    </span>
                                    
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
