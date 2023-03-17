import { getLocations }

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "location") {
            setLocation(parseInt(event.target.value))
            // window.alert(`User chose size ${event.target.value}`)
        }
    }
)

