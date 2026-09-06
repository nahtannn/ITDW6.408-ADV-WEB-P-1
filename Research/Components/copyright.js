//Component Codes
export const copyright = {
    //UI for copyright component
    renderUI() {
        let ui = `
        <div class="research-flip-card position-relative" id="copyright-card">
            <div class="research-flip-card-inner position-relative w-100 h-100">
                <div class="research-flip-card-front position-absolute 
                w-100 h-100 flex justify-content-center align-items-center
                text-center text-black p-3 rounded">
                    <!-- Front content here -->
                    <h4 class="fw-bold">
                        Copyright, CC Licenses & Fair Use
                    </h4>
                    <img src="/Images/research-copyright.jpg" alt="Copyright" class="mt-4" style="max-width: 80%; max-height: 200px;">
                </div>
                <div class="research-flip-card-back position-absolute w-100 h-100 p-3 rounded overflow-y-auto">
                    <!-- Back content here -->

                    <!--Copyright content-->
                    <h5 class="fw-bold">Copyright Act 1994</h5>
                    <p>
                        In New Zealand, copyright law is regulated by the Copyright Act 1994. This act details the rules of using copyrighted content
                        in works, the rules for using copyrighted material, and the exceptions for fair use and Creative Commons licenses.
                        <br>
                        Copyright is automatically granted to the creator of an original work, giving them exclusive rights to use and distribute their work.
                        This ensures that creators have control over how their work is used and can benefit from their intellectual property.
                    </p>
                    <br>
                    <!--Creative Commons content-->
                    <h5 class="fw-bold">Creative Commons Licenses</h5>
                    <p>
                        Creative Commons licenses allow creators to grant permission for others to use their work under certain conditions. 
                        These licenses provide a flexible way for creators to share their work while retaining some rights.
                    </p>
                    <ol>
                        <li>Attribution (BY): Requires giving appropriate credit to the original creator.</li>
                        <li>Non-Commercial (NC): Allows others to use the work for non-commercial purposes only.</li>
                        <li>No Derivatives (ND): Allows others to use the work as-is, without making modifications.</li>
                        <li>ShareAlike (SA): Allows others to distribute derivative works under the same license as the original.</li>
                    </ol>
                    <p>
                        These licenses can be combined to form more complex licensing arrangements, such as CC BY-NC-SA, which requires attribution, 
                        allows only non-commercial use, and mandates that derivative works be shared under the same license.
                    </p>
                    <br>
                    <!--Fair Use content-->
                    <h5 class="fw-bold">Fair Use</h5>
                    <p>
                        New Zealand doesn't actually use the term Fair use. Instead, it is called "fair dealing".
                        Under the copyright act of 1994, fair dealing allows limited use of copyrighted material for
                        specific purposes such as research, private study, criticism, review, and news reporting.
                    </p>
                    <br>
                    <!--Analysing potential copyright issues and what type of CC i would use for my project-->
                    <h5 class="fw-bold">Potential Copyright issues for My Project</h5>
                    <p>
                        My website contains numerous images developed by other individuals/companies.
                        To avoid any potential copyright issues, I would need to check every CC license 
                        associated with the images and ensure that I comply with the terms specified by 
                        the creators.
                        <br>
                        This project is for educational purposes only so use of copyrighted material is limited and should fall under fair dealing.
                        <br>
                        For this project, I utilised the images provided in the assignment outline. As these were provided
                        specifically for the assignment, I do not anticipate any copyright issues.
                    </p>
                    <br>
                    <h5 class="fw-bold">My Project's CC License</h5>
                    <p>
                        For my project, I would apply a CC BY-NC-SA License. This license allows others to modify, share, and build upon my work non-commercially, 
                        as long as they credit me and license their new creations under the identical terms.
                    </p>
                    <!--Link for further reading-->
                    <p>
                        For more information on Copyright, visit 
                        <a href="https://www.iponz.govt.nz/get-ip/copyright/" target="_blank">The Intellectual Property Office of New Zealand</a>.
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
        document.getElementById("copyright-card").addEventListener("click", function() {
            //when clicked, change add flipped state to the CSS
            this.classList.toggle("flipped");
        });
    },
}