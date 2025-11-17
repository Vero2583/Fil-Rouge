import { logo } from "./logo.mjs";

logo()

export function header() {
    const header = document.createElement('header')
    header.innerHTML = `
    
    <h2>ZE OPEN SOURCES</h2>
    <button class="header" id="burger1-btn">☰</button>

    `

}