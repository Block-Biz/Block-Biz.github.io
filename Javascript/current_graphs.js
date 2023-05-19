const signContract = document.getElementById("sign-contract");
const fundDetails = document.getElementById("fund-details")
document.getElementById("contract").style.display = "none";
document.getElementById("navbar").style.display = "none";
document.getElementById("the_graphs").style.display = "none";
const home = document.getElementById("home")
document.getElementById("make-contract").style.color = "black"
document.getElementById("user-profile").style.display = "none"
const myProfile = document.getElementById("my-profile")
document.getElementById("body").style.overflowY = "hidden"
window.scroll(0, 0)
const login = document.getElementById("login")

myProfile.addEventListener('click', function onClick() {
    document.getElementById("user-profile").style.display = "block"
    document.getElementById("the_graphs").style.display = "none";
    document.getElementById("contract").style.display = "none";
    document.getElementById("view-contract").style.display = "none";
    document.getElementById("home").style.color = "whitesmoke";
    document.getElementById("fund-details").style.color = "whitesmoke";
    document.getElementById("my-profile").style.color = "black";
    document.getElementById("make-contract").style.color = "whitesmoke";
});

login.addEventListener('click', function onClick() {
    if ((document.getElementById("username").value === "ndlovuraymond") && (document.getElementById("pass").value === "BlockBizRocks")) {
        document.getElementById("login-form").style.display = "none"
        document.getElementById("navbar").style.display = "flex";
        document.getElementById("contract").style.display = "flex";
        document.getElementById("body").style.overflowY = "scroll"
    }
    else {
        document.getElementById("error-name").innerHTML = "Wrong username or password"
    }
});
signContract.addEventListener('click', function onClick() {
    document.getElementById("navbar").style.display = "flex";
    content = document.querySelector(".view-contract");
    contentContract = document.querySelector(".contract-details");
    document.getElementById("contract").style.display = "none";
    document.getElementById("make-contract").style.color = "whitesmoke";
    document.getElementById("make-contract").style.color = "whitesmoke";
    window.scroll(0, 0)
    document.getElementById("fund-details").style.color = "black"
    const contractDate = document.getElementById("contract-date").value;
    const partyOne = document.getElementById("party-one").value;
    const partyTwo = document.getElementById("party-two").value;
    const contractAmount = document.getElementById("contract-amount").value;
    const duration = document.getElementById("duration").value;
    const nameOne = document.getElementById("party-one").value;
    const nameTwo = document.getElementById("party-one").value;
    const endDate = document.getElementById("end-date").value;
    const startDate = document.getElementById("start-date").value;
    const product = document.getElementById("contract-product").value;
    const signbyTwo = document.getElementById("signed-by-two").value;
    const signDateTwo = document.getElementById("sign-date-two").value;
    const signbyOne = document.getElementById("signed-by-one").value;
    const signDateOne = document.getElementById("sign-date").value;
    const percentage = document.getElementById("percentage").value;
    let text = `<h4>Contract Amount: ${contractAmount}</h4>
    <h4>End Date: ${endDate}</h4>
    <h4>Signed by: ${signbyOne}</h4>`
    contentContract.innerHTML = text;
    let htmlSegement = `        <div class="contract-wrapper">
    <div class="contract">
        <div class="contract-header">
            <h1>Contract</h1>
        </div>
        <div class="contract-body">
            <div class="contract-clause">
                <div class="clause-header">
                    <h2>Custom contract</h2>
                </div>
                <p>
                    This is a smart contract entered into on ${contractDate} between ${partyOne} and ${partyTwo} for the
                    contractual amount of ${contractAmount} where ${partyOne} is
                    the buyer and ${partyTwo} is the seller. the representatives
                    of ${partyOne} and ${partyTwo} are ${nameOne} and ${nameTwo} respectively. The
                    underlying asset of this contract is ${product}.
                    This contract will begin on ${startDate} for the duration of
                    ${duration} months/years and will end on ${endDate} unless otherwise terminated
                    by the mutual agreement of both parties or as specified in this contract.
                </p>
            </div>
            <div class="contract-clause">
                <div class="clause-header">
                    <h2>Optional Clause</h2>
                </div>
                <p>
                <ul>
                    <li>
                        The parties may agree that the position in the digital asset may be closed if the losses
                        reach ${percentage}%
                    </li>
                </ul>
                </p>
            </div>
            <div class="contract-clause">
                <div class="clause-header">
                    <h2>Non-negotiable Terms and Conditions</h2>
                </div>
                <p>
                <ol>
                    <li> A minimum of 50% of the total contractual amount is to be invested in the digita asset.
                    </li>
                    <li>At any point before the date of maturity of contract, the position in the digital
                        asset can be closed to continue with the traditional method of a forward contract
                        for the remaining time period only if both parties agree to do so.
                    </li>
                    <li> If the above mentioned is not executed, the position in the digital asset will be
                        closed automatically at the date of maturity of the contract.
                    </li>
                    <li>If the selling party incurs a loss, the buying party is under no obligation to share
                        the losses
                    </li>
                    <li> BlockBiz will not be sharing any losses with either of the parties.
                    </li>
                    <li> A fee of 1% of the total contractual amount will be charged to each of the parties
                        involved in this contract.
                    </li>
                    <li>In the event of any disputes or disagreements between the parties arising from this
                        contract, both parties agree to first attempt to resolve the dispute amicably
                        through mediation. If the dispute cannot be resolved through mediation, both
                        parties agree to binding arbitration in accordance with the rules and regulations of
                        BlockBiz
                    </li>
                    <li> In case of termination due to disputes, a fee of 5% of the total contractual amount
                        will be charged to each of the parties involved in this contract.
                    </li>
                    <li> This Contract may be amended or modified at any time with the mutual agreement
                        of both parties, and any amendments or modifications shall be in writing and
                        signed by both parties
                </ol>
                </p>
            </div>
        </div>
        <div class="contract-footer">
            <div class="signed-by">
                <div>Signed by ${signbyTwo}</div>
                <div>Date ${signDateTwo}</div>
            </div>
            <div class="signed-by">
            <div>Signed by ${signbyOne}</div>
            <div>Date ${signDateOne}</div>
            </div>
        `
    content.innerHTML = htmlSegement;
});

home.addEventListener('click', function onClick() {
    document.getElementById("home").style.color = "black";
    document.getElementById("fund-details").style.color = "whitesmoke";
    document.getElementById("my-profile").style.color = "whitesmoke";
    document.getElementById("make-contract").style.color = "whitesmoke";
    document.getElementById("view-contract").style.display = "none";
    document.getElementById("the_graphs").style.display = "flex";
    document.getElementById("contract").style.display = "none"
    document.getElementById("user-profile").style.display = "none"
});

fundDetails.addEventListener('click', function onClick() {
    document.getElementById("home").style.color = "whitesmoke";
    document.getElementById("my-profile").style.color = "whitesmoke";
    document.getElementById("make-contract").style.color = "whitesmoke";
    document.getElementById("fund-details").style.color = "black";
    document.getElementById("view-contract").style.display = "flex";
    document.getElementById("the_graphs").style.display = "none";
    document.getElementById("contract").style.display = "none"
    document.getElementById("user-profile").style.display = "none"
});

