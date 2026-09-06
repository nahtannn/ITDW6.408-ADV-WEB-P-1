//Component Codes
export const seo = {
    //UI for search engine optimization component
    renderUI() {
        let ui = `
        <div class="research-flip-card position-relative" id="seo-card">
            <div class="research-flip-card-inner position-relative w-100 h-100">
                <div class="research-flip-card-front position-absolute 
                w-100 h-100 flex justify-content-center align-items-center
                text-center text-black p-3 rounded">
                    <!-- Front content here -->
                    <h3 class="fw-bold">
                        Search Engine Optimization
                    </h3>
                    <img src="Images/SEO image.jpg" alt="Search Engine Optimization Thumbnail" 
                    class="mt-4" style="max-width: 80%; max-height: 200px;">
                </div>
                <div class="research-flip-card-back position-absolute w-100 h-100 p-3 rounded overflow-y-auto">
                    <!-- Back content here -->
                    <h5 class="fw-bold">
                        What steps will I take to improve the visibility of my website on search engines?
                    </h5>
                    <p>
                        Search engines such as Google and Bing use algorithms to rank websites based on relevance and quality.
                        By incorporating search engine optimization (SEO) techniques, I can improve my website's ranking and visibility on search engines.
                        <br>
                        Here are some steps I will take to improve SEO:
                    </p>
                    <ol>
                        <li>On-page optimisation - Keyword Relevant Page Titles, Meta Descriptions, and Alt Text for Images</li>
                        <li>Site speed optimization - Ensuring fast loading times for better user experience and search engine ranking</li>
                        <li>Mobile optimization - Making sure the website is mobile-friendly and responsive</li>
                        <li>Content optimization - Creating high-quality, relevant content that satisfies user intent and includes target keywords</li>
                        <li>Link building - Clickable, High Quality hyperlinks that lead to internal or external websites</li>
                    </ol>
                    <!--How I plan to implement SEO into my website-->
                    <h5 class="fw-bold">
                        How I plan to implement SEO into my website
                    </h5>
                    <p>
                        During the development of this page of my website, I have implemented On-page optimisation, 
                        Mobile optimisation, and Link building already.
                        To further improve the SEO of my website, I plan to focus on Site speed optimization and Content optimization.
                    </p>
                    <!--Link for further reading-->
                    <p>
                        For more information on Search Engine Optimization (SEO), visit 
                        <a href="https://www.otago.ac.nz/marketing-services/resources/web-content-and-guidelines-for-the-university-of-otago/guides/search-engine-optimisation-seo-guide" target="_blank">Otago University Introduction to search engine optimisation</a>.
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
        document.getElementById("seo-card").addEventListener("click", function() {
            //when clicked, change add flipped state to the CSS
            this.classList.toggle("flipped");
        });
    },
}