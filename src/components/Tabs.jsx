import { useState } from 'react'

const Tabs = () => {
    const [toggleTabs, setToggleTabs] = useState(1)

    const tabButtons = ["Tab1", "Tab2", "Tab3"]
    const tabContents = ["This is Content 1", "This is Content 2", "This is Content 3"]

    return (
        <div className="container">
            <div className="btn-main">
                {
                    tabButtons.map((item, index) =>
                        <button key={item} className={toggleTabs === index + 1 ? " active-btn" : ""} onClick={() => setToggleTabs(index + 1)} >
                            {item}
                        </button>
                    )
                }


            </div>

            <div className="content-main">
                {
                    tabContents.map((item, index) =>
                        <div className={toggleTabs === index + 1 ? "content active-content" : "content"}>
                            <p>
                                {item}
                            </p>
                        </div>

                    )
                }
            </div>
        </div>
    )
}

export default Tabs