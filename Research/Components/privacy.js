//Component Codes
export const privacy = {
    //UI for privacy component
    renderUI() {
        let ui = `
        <div class="research-flip-card position-relative" id="privacy-card">
            <div class="research-flip-card-inner position-relative w-100 h-100">
                <div class="research-flip-card-front position-absolute 
                w-100 h-100 flex justify-content-center align-items-center
                text-center text-black p-3 rounded">
                    <!-- Front content here -->
                    <h3 class="fw-bold">
                        Privacy Policy
                    </h3>
                    <img src="Images/privacy policy.jpg" alt="Privacy Policy Thumbnail" 
                    class="mt-4" style="max-width: 80%; max-height: 200px;">
                </div>
                <div class="research-flip-card-back position-absolute w-100 h-100 p-3 rounded overflow-y-auto">
                    <!-- Back content here -->
                    <h5 class="fw-bold">
                        What is a privacy policy?
                    </h5>
                    <p>
                        A privacy policy is a statement or legal document that outlines how a company collects, uses, discloses, 
                        and manages the personal information of its users. A privacy policy ensures people are aware:
                    </p>
                    <ul>
                        <li>That you are collecting information from them.</li>
                        <li>How their information will be used.</li>
                        <li>Why you are collecting the information.</li>
                        <li>How they can access and control their information.</li>
                        <li>Whether the person has to give you the information and what will happen if they don't.</li>
                        <li>Who will have access to their information.</li>
                    </ul>

                    <!--13 Principles of Privacy -->
                    <h5 class="fw-bold">
                        13 Principles of Privacy
                    </h5>
                    <p>
                        Under the Privacy Act 2020, there are 13 principles that guide how personal information should be handled.
                    </p>
                    <ol>
                        <li>Purpose of collection - Only collect information for a lawful and necessary purpose.</li>
                        <li>Source of information - Collect information directly from the individual.</li>
                        <li>What to tell the individual when you collect their information directly 
                        - Inform the individual about the purpose of collection and how their information will be used.</li>
                        <li>Manner of collection - Collect information in a way that is fair and not intrusive.</li>
                        <li>Storage and security - Ensure that personal information is stored securely and protected from unauthorized access.</li>
                        <li>Providing access - Individuals have a right to ask for access to their personal information.</li>
                        <li>Correction of information - Individuals have the right to request correction of their personal information.</li>
                        <li>Accuracy of information - Ensure that personal information is accurate, complete, and up-to-date.</li>
                        <li>Retention - Do not keep personal information longer than necessary for the purpose it was collected.</li>
                        <li>Use of information - Use personal information only for the purpose it was collected.</li>
                        <li>Disclosing personal information - Do not disclose personal information to third parties without consent, unless required by law.</li>
                        <li>Disclosure outside New Zealand - Ensure that personal information transferred overseas is
                        protected to the same standard as required by the Privacy Act 2020.</li>
                        <li>Unique identifiers - Do not assign unique identifiers to individuals unless necessary for the purpose of collection.</li>
                    </ol>
                    <!--Potential privacy problems with my project-->
                    <h5 class="fw-bold">Potential Privacy Problems with My Project</h5>
                    <p>
                        My website collects personal information from the users from forms they fill out.
                        This information includes sensitive information such as names and addresses.
                        To ensure my website complies with privacy principles, I must ensure that personal information is collected lawfully,
                        stored securely, used appropriately, and notified to the users about how it will be handled.
                        To handle potential privacy issues, i have implemented a privacy policy as well as storing sensitive personal information
                        off-site in a trusted third-party service that complies with privacy regulations.
                    </p>
                    <!--Link for further reading-->
                    <p>
                        For more information on Privacy, visit 
                        <a href="https://www.privacy.org.nz/privacy-principles/">Privacy.org.nz</a>.
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
        document.getElementById("privacy-card").addEventListener("click", function() {
            //when clicked, change add flipped state to the CSS
            this.classList.toggle("flipped");
        });
    },
}