class Avatar extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <style>
            @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");
            .avatar {
                display: flex;
                align-items: center;
                justify-content: center;
                column-gap: 10px;
                font-family: "Roboto", sans-serif;
            }
            .avatar__img {
                width: 70px;
                height: auto;
            }
            .avatar__name {
                font-size: 1.5rem;
                letter-spacing: 0.05rem;
                color: #494738;
            }
        </style>
        <div class="avatar">
        <!-- elemento img -->
        <img class="avatar__img" src="assets/logo-detalle-lemontv.svg" />
        <!-- elemento name -->
        <h1 class="avatar__name">LEMONCODE</h1>
    </div>`;
	}
}

customElements.define("avatar-component", Avatar);
