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
                    <h5 class="fw-bold">
                        5 Common Cybersecurity Threats
                    </h5>
                    <ol>
                        <li>Phishing - Fradulent attemps to gain access to information often disguised as a trusted entity</li>
                        <li>SQL injection - Malicious SQL statements are inserted into an entry field for execution</li>
                        <li>Distributed Denial of Service (DDoS) - Overwhelming a target with a tidal wave of traffic to make it unavailable</li>
                        <li>Man-in-the-Middle (MitM) - Intercepting and altering communication between two parties without their knowledge</li>
                        <li>Ransomware - Malicious software that encrypts files and demands payment for their release</li>
                    </ol>
                    <h5 class="fw-bold">
                        How to prevent these threats
                    </h5>
                    <ol>
                        <li>Be wary of unknown emails and links to avoid phishing attacks</li>
                        <li>Regularly update and patch software to prevent SQL injection attacks and Backup data regularly to mitigate ransomware threats</li>
                        <li>Implement network security measures such as firewalls and intrusion detection systems to protect against DDoS attacks</li>
                        <li>Use encryption and secure communication protocols to prevent MitM attacks</li>
                        <li>Use strong, unique passwords and enable multi-factor authentication to protect against unauthorized access</li>
                    </ol>
                    <!--Analysing the potential threats of my website-->
                    <h5 class="fw-bold">
                        Analysing potential security threats to my website
                    </h5>
                    <p>
                        A key threat i face with my website is the possibility of unauthorized access to sensitive user data through SQL injection attacks.
                        My form page allows users to input data, which could be exploited if proper validation and sanitization are not implemented.
                        Along with this, my website is vunerable to Distributed Denial of Service (DDoS) attacks, which could make it temporarily unavailable to users.
                        This is why it is best to use a third party web hosting service that provides robust security measures and DDoS protection.
                    </p>
                    <!--Link for Further Reading-->
                    <p>
                        For more information on web security best practices, visit 
                        <a href="https://www.fortinet.com/resources/cyberglossary/web-security-threats" target="_blank">Fortinet</a>.
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