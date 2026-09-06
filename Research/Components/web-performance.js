//Component Codes
export const maintenance = {
    //UI for maintenance component
    renderUI() {
        let ui = `
        <div class="research-flip-card position-relative" id="maintenance-card">
            <div class="research-flip-card-inner position-relative w-100 h-100">
                <div class="research-flip-card-front position-absolute 
                w-100 h-100 flex justify-content-center align-items-center
                text-center text-black p-3 rounded">
                    <!-- Front content here -->
                    <h3 class="fw-bold">
                        Website Maintenance
                    </h3>
                    <img src="Images/web performance and maintenance.jpg" alt="Website Maintenance Thumbnail" 
                    class="mt-4" style="max-width: 80%; max-height: 200px;">
                </div>
                <div class="research-flip-card-back position-absolute w-100 h-100 p-3 rounded overflow-y-auto">
                    <!-- Back content here -->
                    <h5 class="fw-bold">
                        5 Ways to Reduce Page Load Time
                    </h5>
                    <ol>
                        <li>Optimize images - Compress and resize images to reduce their impact on page load time</li>
                        <li>Limit use of external scripts - Reduce the number of third-party scripts to minimize their impact on page load time</li>
                        <li>Enable browser caching - Allow browsers to store static files locally for faster subsequent page loads</li>
                        <li>Limit the number of http requests - Reduce the number of requests made to the server to improve page load time</li>
                        <li>Limit redirect usage - Minimize the number of redirects to reduce additional HTTP requests and improve page load time</li>
                    </ol>
                    <!--Important Actions to take to carry out when maintaining a website-->
                    <h5 class="fw-bold">
                        Important Actions for Website Maintenance
                    </h5>
                    <ul>
                        <li>Regularly update software and plugins to ensure security and functionality</li>
                        <li>Back up website data regularly to prevent data loss</li>
                        <li>Regularly check for and fix broken links to maintain website functionality</li>
                        <li>Regularly review and update website content to ensure it remains accurate and relevant</li>
                        <li>Regularly monitor website performance to identify and resolve any issues promptly</li>
                    </ul>
                    <!--Loading time of website and how to improve it-->
                    <h5 class="fw-bold">
                        Improving Website Load Time
                    </h5>
                    <p>
                        Currently, my website has a performance rating of 72 and a speed index of 2.6 seconds. 
                        This was evaluated using google chrome developer tools.
                    </p>
                    <h5 class="fw-bold">
                        What will I do to improve my website performance?
                    </h5>
                    <p>
                        To further improve my website's performance, I will:
                    </p>
                    <ul>
                        <li>Optimize images by compressing and resizing them</li>
                        <li>Limit the use of external scripts</li>
                        <li>Limit the use of large media files</li>
                    </ul>
                    <!--Link for further reading-->
                    <p>
                        For more information on improving website performance, visit 
                        <a href="https://www.cloudflare.com/learning/performance/speed-up-a-website/" target="_blank">Cloudflare How to Speed Up a Website</a>.
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
        document.getElementById("maintenance-card").addEventListener("click", function() {
            //when clicked, change add flipped state to the CSS
            this.classList.toggle("flipped");
        });
    },
}