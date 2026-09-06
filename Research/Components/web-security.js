//Component Codes
export const security = {
    //UI for security component
    renderUI() {
        let ui = `
        <div class="research-flip-card position-relative" id="security-card">
            <div class="research-flip-card-inner position-relative w-100 h-100">
                <div class="research-flip-card-front position-absolute 
                w-100 h-100 flex justify-content-center align-items-center
                text-center text-black p-3 rounded">
                    <!-- Front content here -->
                    <h3 class="fw-bold">
                        Web Security
                    </h3>
                    <img src="Images/cyber security.jpg" alt="Web Security Thumbnail" 
                    class="mt-4" style="max-width: 80%; max-height: 200px;">
                </div>
                <div class="research-flip-card-back position-absolute w-100 h-100 p-3 rounded overflow-y-auto">
                    <!-- Back content here -->
                    <p class="fs-6 lh-base">
                        Web security explanation goes here.
                    </p>
                </div>
            </div>
        </div>
        `;
        return ui;
    },

    //Functions
    addEvent() {
        //flip cards when clicked
        document.getElementById("security-card").addEventListener("click", function() {
            //when clicked, change add flipped state to the CSS
            this.classList.toggle("flipped");
        });
    },
}