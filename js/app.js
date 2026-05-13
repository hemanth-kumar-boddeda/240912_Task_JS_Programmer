// Initial Talent Data with Trust Scores and Verification Signals
let talentPool = [
    {
        id: 1,
        name: "Alex Rivera",
        role: "Sr. Backend Engineer",
        trustScore: 942,
        skills: ["Rust", "Distributed Systems"],
        referrer: "Sarah Chen (L7 @ Meta)",
        signals: ["GitHub Verified", "Manager Verified"],
        bounty: 2500,
        github: "arivera-dev"
    },
    {
        id: 2,
        name: "Jordan Lee",
        role: "Fullstack Developer",
        trustScore: 815,
        skills: ["React", "TypeScript", "Node.js"],
        referrer: "Mike Ross (Lead @ Stripe)",
        signals: ["Skill Verified", "Referrer Trusted"],
        bounty: 1500,
        github: "jlee-code"
    },
    {
        id: 3,
        name: "Samantha Wu",
        role: "AI/ML Researcher",
        trustScore: 988,
        skills: ["PyTorch", "NLP", "CUDA"],
        referrer: "David Hall (Founder @ AI Lab)",
        signals: ["Paper Verified", "GitHub Elite"],
        bounty: 5000,
        github: "swu-ml"
    },
    {
        id: 4,
        name: "Marcus Thorne",
        role: "DevOps Architect",
        trustScore: 720,
        skills: ["K8s", "AWS", "Terraform"],
        referrer: "Elena Gilbert (CTO @ FinTech)",
        signals: ["Cert Verified"],
        bounty: 2000,
        github: "mthorne-ops"
    }
];

// Populate the Talent Feed
function populateTalentFeed() {
    const tableBody = document.getElementById("talentBody");
    tableBody.innerHTML = "";

    talentPool.sort((a, b) => b.trustScore - a.trustScore).forEach(candidate => {
        const row = tableBody.insertRow();

        // Candidate Column
        const cellInfo = row.insertCell(0);
        cellInfo.innerHTML = `
            <div class="candidate-info">
                <p class="cand-name">${candidate.name}</p>
                <p class="cand-role">${candidate.role}</p>
            </div>
        `;

        // Trust Score Column
        const cellScore = row.insertCell(1);
        const scoreClass = candidate.trustScore > 900 ? 'high' : (candidate.trustScore > 800 ? 'medium' : 'low');
        cellScore.innerHTML = `<span class="trust-badge ${scoreClass}">${candidate.trustScore}</span>`;

        // Skills Column
        const cellSkills = row.insertCell(2);
        cellSkills.innerHTML = candidate.skills.map(s => `<span class="skill-tag">${s}</span>`).join('');

        // Referrer Column
        const cellReferrer = row.insertCell(3);
        cellReferrer.innerHTML = `<p class="referrer-name">${candidate.referrer}</p>`;

        // Signals Column
        const cellSignals = row.insertCell(4);
        cellSignals.innerHTML = candidate.signals.map(sig => `
            <div class="signal-item">
                <span class="signal-icon">✓</span> ${sig}
            </div>
        `).join('');

        // Bounty Column
        const cellBounty = row.insertCell(5);
        cellBounty.innerHTML = `<span class="bounty-val">$${candidate.bounty}</span>`;

        // Actions Column
        const cellActions = row.insertCell(6);
        cellActions.innerHTML = `
            <button class="btn-hire" onclick="hireCandidate(${candidate.id})">Warm Outreach</button>
        `;
    });
}

// Hire/Outreach Function (End-to-End simulation)
function hireCandidate(id) {
    const candidate = talentPool.find(c => c.id === id);
    alert(`Initiating Warm Outreach to ${candidate.name} via ${candidate.referrer}.\n\nReferral Bounty of $${candidate.bounty} locked in escrow.`);
    console.log(`TrustLoop: Matching recruiter Jane Smith with ${candidate.name}. Context: Referred by ${candidate.referrer}.`);
}

// Modal Logic
function openReferralModal() {
    document.getElementById("referralModal").style.display = "block";
}

function closeReferralModal() {
    document.getElementById("referralModal").style.display = "none";
}

// Submit Referral Simulation
function submitReferral(event) {
    event.preventDefault();
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerText;

    const name = document.getElementById("candName").value;
    const github = document.getElementById("candGithub").value;
    const referrer = document.getElementById("referrerName").value;

    // UI Feedback: Verifying
    submitBtn.disabled = true;
    submitBtn.innerText = "Verifying Trust Graph...";

    // Simulate AI Trust Verification & PoW Check
    setTimeout(() => {
        const simulatedScore = Math.floor(Math.random() * (999 - 600) + 600);

        const newCandidate = {
            id: talentPool.length + 1,
            name: name,
            role: "Software Engineer",
            trustScore: simulatedScore,
            skills: ["Verified Skills", "New Referral"],
            referrer: `${referrer} (Verified Scout)`,
            signals: ["GitHub PoW Verified", "Network Multiplier Applied"],
            bounty: 1200,
            github: github
        };

        talentPool.push(newCandidate);
        populateTalentFeed();

        submitBtn.disabled = false;
        submitBtn.innerText = originalText;

        closeReferralModal();
        alert(`AI Trust Verification Complete!\n\nCandidate: ${name}\nTrust Score: ${simulatedScore}\n\n${name} has been added to the high-signal talent graph.`);
    }, 1500);
}

function refreshFeed() {
    populateTalentFeed();
}

// Initial Load
document.addEventListener("DOMContentLoaded", populateTalentFeed);
