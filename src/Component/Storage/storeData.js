const getStoredApp = () => {

    const storedApp = localStorage.getItem("installed");

    if (storedApp) {
        const storedBookData = JSON.parse(storedApp);
        return storedBookData;
    }
    else {
        return [];
    }

}

const addToStoredApp = (id) => {

    const storedAppData = getStoredApp();
    storedAppData.push(id);
    const data = JSON.stringify(storedAppData);
    localStorage.setItem("installed", data)

}

export { addToStoredApp, getStoredApp };