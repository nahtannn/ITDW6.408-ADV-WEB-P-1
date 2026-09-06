//Component Codes
export const hosting = {
    //UI for hosting component
    renderUI() {
        let ui = `
        <div class="research-flip-card position-relative" id="hosting-card">
            <div class="research-flip-card-inner position-relative w-100 h-100">
                <div class="research-flip-card-front position-absolute 
                w-100 h-100 flex justify-content-center align-items-center
                text-center text-black p-3 rounded">
                    <!-- Front content here -->
                    <h3 class="fw-bold">
                        Web Hosting
                    </h3>
                    <img src="Images/web hosting.jpg" alt="Web Hosting Thumbnail" 
                    class="mt-4" style="max-width: 80%; max-height: 200px;">
                </div>
                <div class="research-flip-card-back position-absolute w-100 h-100 p-3 rounded overflow-y-auto">
                    <!-- Back content here -->
                    <h5 class="fw-bold">
                        5 Factors to consider when choosing a web hosting provider
                    </h5>
                    <ol>
                        <li>Reliability and uptime - Making sure the hosting provider can host your website consistently without frequent downtime</li>
                        <li>Network Performance - Ensuring the hosting provider has a fast and reliable network for optimal website load times and performance</li>
                        <li>Scalability - Ensuring the hosting provider can accommodate increases in website traffic and resource demands</li>
                        <li>Security - Making sure the hosting provider has robust security measures in place to protect your website and data</li>
                        <li>Cost - Making sure the hosting provider offers competitive pricing that fits within your budget</li>
                    </ol>
                    <!--What web hosting provider I plan to use-->
                    <h5 class="fw-bold">
                        What web hosting provider I plan to use
                    </h5>
                    <p>
                        I plan to use Vercel as my web hosting provider as it is reliable, offers good network performance, free for small projects like mine, 
                        and is compatible with supabase for database management.
                    </p>
                    <!--Link for further reading-->
                    <p>
                        For more information on web hosting, visit 
                        <a href="https://webhosting.co.nz/top-10-factors-to-consider-when-choosing-a-nz-web-hosting/" target="_blank">Web Hosting Guide</a>.
                        <br>
                        <i>(This website may be inaccurate as it is a small, independent guide)</i>
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
        document.getElementById("hosting-card").addEventListener("click", function() {
            //when clicked, change add flipped state to the CSS
            this.classList.toggle("flipped");
        });
    },
}