// functions/about.js
// Контент страницы About Us (без шапки, подвала и переводчика)

export async function onRequestGet() {
  const htmlContent = `
    <!-- ===== СОДЕРЖАНИЕ СТРАНИЦЫ ABOUT US ===== -->
    <!-- Всё, что было внутри <body> после шапки и до подвала, с удалённым переводчиком -->
    
    <section class="hero">
      <div class="hero-lines"></div>
      <p class="hero-eyebrow">Tashkent, Uzbekistan · Founded 2012 · US Patent No. 6,095,069</p>
      <h1 class="hero-wordmark">
        ZARIF
        <span>Sewing Machine Co., Ltd.</span>
      </h1>
      <div class="hero-rule"></div>
      <p class="hero-tagline">Bridging 19th-century mechanics and 21st-century artificial intelligence — the world's first robot-native sewing technology.</p>
      <div class="hero-stats">
        <div class="stat"><span class="stat-n">31</span><span class="stat-l">Years of Research</span></div>
        <div class="stat"><span class="stat-n">$2.36T</span><span class="stat-l">Industry Size</span></div>
        <div class="stat"><span class="stat-n">10</span><span class="stat-l">Innovations</span></div>
        <div class="stat"><span class="stat-n">5,000+</span><span class="stat-l">Hours Tested</span></div>
        <div class="stat"><span class="stat-n">170</span><span class="stat-l">Years Solved</span></div>
      </div>
    </section>

    <section class="section" id="mission">
      <div class="wrap">
        <span class="section-tag">Who We Are</span>
        <h2>Mission &amp; <em>Vision</em></h2>
        <div class="mission-grid reveal">
          <div>
            <p><strong>ZARIF Sewing Machine Co., Ltd.</strong> is a technology company based in Tashkent, Uzbekistan. We are not a traditional sewing machine factory. We are the architects of <strong>ZARIF 2025</strong> — a breakthrough platform that ends 170 years of technological stagnation in the global apparel industry.</p>
            <p>Since 1846, every industrial sewing machine on earth has operated on the same two mechanical principles: the lockstitch (Type 301) and the chain stitch (Type 401). Both were designed for human hands. Both contain structural defects that make full robot automation physically impossible. <strong>ZARIF 2025 replaces both.</strong></p>
            <p>Our mission is to provide the global market with the first <strong>"Robot-Native" sewing platform</strong> — a machine architecturally designed for humanoid robots and AI systems, enabling fully autonomous, lights-out garment manufacturing.</p>
          </div>
          <div class="mission-quote">
            <p>"For 170 years, engineers asked how to make robots work with existing sewing machines. We asked a different question: can we design a sewing machine that robots can actually use? The answer took 31 years. The result is ZARIF 2025."</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="history">
      <div class="wrap">
        <span class="section-tag">The Journey</span>
        <h2>31 Years from <em>Idea to Breakthrough</em></h2>
        <div class="timeline">
          <div class="tl-item">
            <span class="tl-year">1857</span>
            <div class="tl-title">James Gibbs Invents the Rotary Looper</div>
            <p class="tl-desc">American inventor James Edward Allen Gibbs patents the first single-thread chain stitch machine using a continuously rotating looper. Willcox & Gibbs machines built in the 1860s still operate today. But Gibbs' rotary looper could only handle one thread — for 137 years, a second thread was considered impossible.</p>
          </div>
          <div class="tl-item">
            <span class="tl-year">1994</span>
            <div class="tl-title">The Question That Changed Everything</div>
            <p class="tl-desc">Dr. Zarif Tadjibaev, then a mechanical engineering researcher in Tashkent, asks a question that 137 years of engineering consensus said was impossible: "Can a double-thread chain stitch be formed WITHOUT an eye-pointed looper?" He theorizes that the rotary looper can act as a loop manipulator — not a thread carrier. Work begins.</p>
          </div>
          <div class="tl-item">
            <span class="tl-year">1997</span>
            <div class="tl-title">First Working Prototype</div>
            <p class="tl-desc">The first prototype demonstrating the rotary looper principle with two threads is completed. The mechanical concept is proven at low speed. Refinement begins — the most demanding phase of the development.</p>
          </div>
          <div class="tl-item">
            <span class="tl-year">2000</span>
            <div class="tl-title">US Patent No. 6,095,069 Granted</div>
            <p class="tl-desc">The United States Patent and Trademark Office grants US Patent No. 6,095,069 — recognizing the rotary looper double-thread chain stitch as a world-first invention. This patent provides the technology with a 20-year legal moat and global protection.</p>
          </div>
          <div class="tl-item">
            <span class="tl-year">2012</span>
            <div class="tl-title">ZARIF Sewing Machine Co., Ltd. Founded</div>
            <p class="tl-desc">Dr. Tadjibaev leaves his academic position at Tashkent Institute of Textile and Light Industry to dedicate full-time effort to commercializing the invention. ZARIF Sewing Machine Co., Ltd. is formally established.</p>
          </div>
          <div class="tl-item">
            <span class="tl-year">2025</span>
            <div class="tl-title">ZARIF 2025 — Technology Complete</div>
            <p class="tl-desc">After 5,000+ hours of prototype testing across silk (0.1mm), denim, mixed fabrics, and leather (8mm), ZARIF 2025 is declared complete. All 10 revolutionary innovations are validated. 79 video demonstrations published on YouTube channel @ZarifTadjibaev. Commercialization phase begins.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="founder">
      <div class="wrap">
        <span class="section-tag">The Inventor</span>
        <h2>Dr. Zarif Sharifovich <em>Tadjibaev</em></h2>
        <div class="founder-layout">
          <div class="founder-card reveal">
            <div class="founder-name">Dr. Zarif Sharifovich Tadjibaev</div>
            <span class="founder-title">Founder &amp; Inventor · ZARIF Sewing Machine Co., Ltd.</span>
            <div class="founder-rule"></div>
            <div class="credential-item">
              <strong>Education:</strong> Graduated with Honours — Tashkent Institute of Textile and Light Industry · Degree in Mechanical Engineering for Machinery and Equipment of Light Industry
            </div>
            <div class="credential-item">
              <strong>PhD (2001):</strong> "Development and Justification of Parameters for Working Units of a Double Thread Chain Stitch Sewing Machine" — Machinery and Equipment of Light Industry. A direct scientific predecessor to ZARIF 2025.
            </div>
            <div class="credential-item">
              <strong>20+ Years Academic Teaching:</strong> "Machine Parts", "Sewing Production Equipment", and "Patent Law" (master's level) at the Tashkent Institute of Textile and Light Industry
            </div>
            <div class="credential-item">
              <strong>Head of Sewing Technology Department (2002–2004):</strong> Responsible for academic direction of the entire department devoted to sewing technology science
            </div>
            <div class="credential-item">
              <strong>Patent Expert:</strong> Taught Patent Law at postgraduate level — drafting claims, filing strategy, and intellectual property protection for technical inventions
            </div>
            <div class="credential-item">
              <strong>31 Years of Research (1994–2025):</strong> Invention of core principle 1994 → US Patent granted 2000 → 25 years of engineering refinement → ZARIF 2025 prototype validated
            </div>
            <div class="credential-item">
              <strong>2012:</strong> Founded ZARIF Sewing Machine Co., Ltd. — left academia to devote full-time effort to perfecting the technology
            </div>
            <div class="credential-item">
              Video demonstrations published on YouTube: @ZarifTadjibaev
            </div>
            <div class="patent-seal">
              <span class="ps-num">US PATENT NO. 6,095,069</span>
              <div class="ps-desc">Granted 2000 · World's First<br>Rotary Looper Double-Thread Chain Stitch</div>
            </div>
          </div>
          <div class="reveal">
            <p>Dr. Tadjibaev is not a hobbyist inventor or startup entrepreneur who stumbled upon a product idea. He is a <strong>career specialist in sewing machine engineering</strong> with more than three decades of combined academic, research, and hands-on development experience — a person who spent his entire professional life studying, teaching, and advancing the very field his invention transforms.</p>
            <p>His education was focused specifically on <strong>Mechanical Engineering for Machinery and Equipment of Light Industry</strong> — the precise academic discipline that encompasses the design, analysis, and development of industrial sewing machines. This was not a general engineering degree.</p>
            <p>For over 20 years he taught the subjects that form the complete theoretical foundation for sewing machine design: the mechanics of machine parts, the engineering of sewing production equipment, and at postgraduate level — <strong>Patent Law</strong>. A man who teaches patent law does not file patents by accident. A man who teaches sewing machine design for 20 years does not invent a new stitch mechanism by chance.</p>
            <p>His PhD dissertation — <em>"Development and Justification of Parameters for Working Units of a Double Thread Chain Stitch Sewing Machine"</em> — is not incidental background. It is a direct scientific predecessor to ZARIF 2025. The "working units" referenced in the title are the exact components — the looper mechanism, the needle, the thread take-up, the stitch formation geometry — that his subsequent 22 years of development perfected into the breakthrough technology of today. His PhD was not a detour from his invention. It was part of the same 31-year scientific journey.</p>
            <p>His key insight in 1994 was both simple and revolutionary: every engineer for 137 years had tried to use the rotary looper as a <strong>thread carrier</strong> for the second thread, and failed. Tadjibaev proposed instead that the looper could serve as a <strong>loop manipulator</strong> — capturing, expanding, and interlocking both thread loops through geometry alone, without the second thread ever passing through an eye. The US patent was granted in 2000.</p>
            <p>But securing the patent was only the beginning. After 5,000+ hours of prototype testing across silk (0.1 mm), denim, mixed fabrics, and leather (8 mm), the ZARIF 2025 prototype has <strong>practically proved</strong> that ZARIF technology is the world's first ideal sewing technology — delivering a double-thread chain stitch (new Type 401) that can replace the traditional lockstitch (Type 301) in more than 90% of applications, without skipped stitches, thread breaks, or needle failures.</p>
            <div class="founder-quote" style="margin-top:28px;padding:20px 24px;border-left:2px solid rgba(197,160,77,0.5);background:rgba(197,160,77,0.04);">
              <p style="font-family:'Cormorant Garamond',serif;font-size:17px;font-style:italic;color:rgba(232,224,208,0.85);margin:0;line-height:1.75;">"For 170 years, the sewing industry has operated within the constraints of two imperfect technologies. ZARIF 2025 is the first technology to transcend both."</p>
              <span style="font-family:'DM Mono',monospace;font-size:9px;letter-spacing:0.2em;color:#c5a04d;text-transform:uppercase;margin-top:12px;display:block;">— Dr. Zarif Sharifovich Tadjibaev</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="innovations">
      <div class="wrap">
        <span class="section-tag">The Breakthrough</span>
        <h2>10 Revolutionary <em>Innovations</em></h2>
        <div class="innovations-intro reveal">
          <p>ZARIF 2025 does not improve on existing sewing technology — it replaces it. The current <strong>ZARIF 2025 prototype</strong> has practically validated the core mechanical breakthrough: the world's first ideal double-thread chain stitch (new Type 401), capable of replacing the traditional lockstitch (Type 301) in more than 90% of applications. Innovations 01–08 below are <strong>validated in the current prototype</strong>. Innovations 09–10 (AI integration, digital controls, and advanced sensors) will be <strong>implemented in future industrial production versions</strong>, to be developed with Series A investment.</p>
        </div>
        <div class="inn-grid">
          <div class="inn-card">
            <span class="inn-num">01</span>
            <span class="inn-icon">🔄</span>
            <div class="inn-name">Eye-Pointless Rotary Looper</div>
            <p class="inn-desc">The world's first double-thread chain stitch formed by a continuously rotating looper with no eye-pointed looper. 137 years of engineering consensus said this was impossible. ZARIF 2025 proves otherwise.</p>
          </div>
          <div class="inn-card">
            <span class="inn-num">02</span>
            <span class="inn-icon">🧵</span>
            <div class="inn-name">Zero Bobbin — Continuous Thread Supply</div>
            <p class="inn-desc">Both top and bottom thread feed from 1–5 kg industrial cones. No bobbin depletion. No replacement every 12–20 minutes. Robots operate 8–24 hours without any thread intervention — eliminating the single biggest obstacle to sewing automation.</p>
          </div>
          <div class="inn-card">
            <span class="inn-num">03</span>
            <span class="inn-icon">⚖️</span>
            <div class="inn-name">Single Universal Tension Setting</div>
            <p class="inn-desc">One "Normal Tension" setting processes materials from 0.1 mm silk to 8 mm leather without any manual adjustment. Traditional machines require 5–15 minutes of skilled human adjustment per material change. ZARIF 2025 requires zero.</p>
          </div>
          <div class="inn-card">
            <span class="inn-num">04</span>
            <span class="inn-icon">📡</span>
            <div class="inn-name">Full Digital Control of Both Threads</div>
            <p class="inn-desc">The ZARIF architecture makes electronic control of both top and bottom thread tension geometrically possible — something structurally impossible in all existing lockstitch machines. <span style="color:#c5a04d;font-style:italic;">This will be implemented in future industrial production versions.</span></p>
          </div>
          <div class="inn-card">
            <span class="inn-num">05</span>
            <span class="inn-icon">✅</span>
            <div class="inn-name">Guaranteed Zero Stitch Skips</div>
            <p class="inn-desc">100% loop capture reliability at any speed. Traditional lockstitch machines produce 5–15 stitch skips per 10,000 stitches under normal conditions — each skip increasing the next by 50%. The rotary looper geometry makes skips structurally impossible.</p>
          </div>
          <div class="inn-card">
            <span class="inn-num">06</span>
            <span class="inn-icon">🔇</span>
            <div class="inn-name">Vibration-Free Rotary Motion</div>
            <p class="inn-desc">The continuously rotating looper moves in one direction only — no oscillating hook mechanism, no vibrational stress on the machine frame, no noise fatigue. Machines run smoother, quieter, and longer at high speed.</p>
          </div>
          <div class="inn-card">
            <span class="inn-num">07</span>
            <span class="inn-icon">🪡</span>
            <div class="inn-name">Zero Thread Breaks from Machine Mechanics</div>
            <p class="inn-desc">Thread breakage in traditional machines occurs at the eye-pointed looper — the sharp metal edge that the thread wraps around on every stitch cycle. ZARIF 2025 has no eye-pointed looper. Thread fatigue from machine mechanics is eliminated by design.</p>
          </div>
          <div class="inn-card">
            <span class="inn-num">08</span>
            <span class="inn-icon">🔩</span>
            <div class="inn-name">Zero Needle Breakage from Looper Collision</div>
            <p class="inn-desc">In traditional machines, the hook tip must pass within 0.01–0.08 mm of the needle — a tolerance finer than a human hair. Any deviation breaks the needle. In ZARIF 2025, the looper's geometry makes needle collision mechanically impossible.</p>
          </div>
          <div class="inn-card">
            <span class="inn-num">09</span>
            <span class="inn-icon">🤖</span>
            <div class="inn-name">Native AI &amp; Robot Integration Architecture</div>
            <p class="inn-desc">The ZARIF mechanical design is architecturally compatible with EtherCAT real-time communication, 48 AI command types, and 10-channel sensor monitoring — because its geometry allows what traditional machines cannot. <span style="color:#c5a04d;font-style:italic;">Full AI and sensor integration will be implemented in future industrial production versions with Series A funding.</span></p>
          </div>
          <div class="inn-card">
            <span class="inn-num">10</span>
            <span class="inn-icon">🏭</span>
            <div class="inn-name">Dual-Operator Architecture</div>
            <p class="inn-desc">ZARIF 2025 machines work with equal efficiency under human operators and humanoid robots. Factories can begin with human operators and automate station by station as robotics technology matures — without replacing the machine.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="comparison">
      <div class="wrap">
        <span class="section-tag">Why Existing Technology Cannot Be Fixed</span>
        <h2>ZARIF 2025 vs. <em>Traditional Technologies</em></h2>
        <div class="reveal">
          <p>The limitations of lockstitch Type 301 and chain stitch Type 401 are not engineering oversights. They are the inevitable physical consequences of how these stitches form. No servo motor, no AI camera, and no software update can resolve them — they are built into the mechanics.</p>
        </div>
        <div class="compare-wrap reveal">
          <table class="compare-table">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Lockstitch Type 301</th>
                <th>Chain Stitch Type 401</th>
                <th>ZARIF 2025<br><span style="font-weight:400;font-size:11px;opacity:0.7;">Chain Stitch New Type 401</span></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Thread supply</td>
                <td class="bad">Bobbin: depletes every 12–20 min</td>
                <td class="note">Looper cone, but requires eye-looper</td>
                <td class="good">Both threads from 1–5 kg industrial cones</td>
              </tr>
              <tr>
                <td>Robot operational time lost to thread tasks</td>
                <td class="bad">35–45% of shift</td>
                <td class="bad">15–20% of shift</td>
                <td class="good">0% — no thread intervention needed</td>
              </tr>
              <tr>
                <td>Bottom thread tension control</td>
                <td class="bad">Manual only (physically inaccessible)</td>
                <td class="bad">Manual only</td>
                <td class="good">Full electronic / digital control <span style="font-size:11px;opacity:0.75;font-style:italic;">(possible by design — to be implemented in industrial versions)</span></td>
              </tr>
              <tr>
                <td>Material changeover</td>
                <td class="bad">5–15 min manual adjustment, 5 parameters</td>
                <td class="bad">3–8 min manual adjustment</td>
                <td class="good">Zero — one universal tension setting</td>
              </tr>
              <tr>
                <td>Stitch skip rate</td>
                <td class="bad">5–15 per 10,000 stitches</td>
                <td class="bad">3–8 per 10,000 stitches</td>
                <td class="good">0 — structurally impossible by design</td>
              </tr>
              <tr>
                <td>Needle-looper tolerance</td>
                <td class="bad">0.01–0.08 mm (finer than human hair)</td>
                <td class="bad">0.05–0.12 mm</td>
                <td class="good">Collision impossible by geometry</td>
              </tr>
              <tr>
                <td>Digital control integration</td>
                <td class="bad">Partial — top thread only</td>
                <td class="bad">Partial</td>
                <td class="good">Full — both threads, 10-channel sensors, EtherCAT <span style="font-size:11px;opacity:0.75;font-style:italic;">(to be implemented in industrial versions)</span></td>
              </tr>
              <tr>
                <td>Robot productivity</td>
                <td class="bad">45–50% (bottlenecked by bobbin)</td>
                <td class="bad">60–65%</td>
                <td class="good">95%+</td>
              </tr>
              <tr>
                <td>Material range without adjustment</td>
                <td class="bad">Narrow — requires re-setup</td>
                <td class="bad">Medium</td>
                <td class="good">0.1 mm silk to 8 mm leather — no adjustment</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="section" id="robots">
      <div class="wrap">
        <span class="section-tag">Robot-Native Design</span>
        <h2>Built for the <em>Humanoid Robot Era</em></h2>
        <div class="robot-intro reveal">
          <p>The humanoid robotics market is projected to grow from $1.8 billion in 2023 to $38 billion by 2035. Tesla plans to manufacture 1 million Optimus units per year. Every major robotics company is searching for their next factory application. The garment industry — $2.36 trillion, 45 million workers, 90% manual operations — is the most obvious opportunity. ZARIF 2025 is the technology that makes it possible.</p>
          <p style="margin-top:16px;padding:14px 20px;background:rgba(197,160,77,0.06);border-left:2px solid rgba(197,160,77,0.5);font-size:14px;color:rgba(232,224,208,0.8);">The robot integrations listed below — EtherCAT communication, ROS 2 protocol, AI vision, digital twin, and full autonomous operation — will be realised in <strong>future industrial production versions of ZARIF machines</strong>, developed with Series A investment. The current validated prototype demonstrates the core mechanical breakthrough that makes this integration architecturally possible.</p>
        </div>
        <div class="robot-grid">
          <div class="robot-card reveal">
            <span class="robot-brand">Tesla · Optimus Gen 2–3</span>
            <div class="robot-name">Tesla Optimus</div>
            <p class="robot-desc">Primary target platform. Tesla FSD neural network architecture most aligned with ZARIF 2025 integration requirements. Mass production scale (1M units/year target) makes this the highest-priority partnership.</p>
          </div>
          <div class="robot-card reveal">
            <span class="robot-brand">Figure AI · Helix System</span>
            <div class="robot-name">Figure AI</div>
            <p class="robot-desc">Demonstrated 61-step autonomous manufacturing tasks at BMW plants. Figure Helix end-to-end neural network shows strong capability for repetitive precision sewing operations.</p>
          </div>
          <div class="robot-card reveal">
            <span class="robot-brand">Boston Dynamics</span>
            <div class="robot-name">Atlas</div>
            <p class="robot-desc">Industry-leading mechanical dexterity and proven factory deployment. Atlas hydraulic/electric system compatible with ZARIF 2025 machine control interface.</p>
          </div>
          <div class="robot-card reveal">
            <span class="robot-brand">XPENG · Unitree · UBTECH</span>
            <div class="robot-name">Asian Platforms</div>
            <p class="robot-desc">Asian manufacturing market is the primary addressable market for ZARIF 2025 (Vietnam, Bangladesh, Cambodia, China — 90% of global garment production). Asian robot platforms represent a direct entry point.</p>
          </div>
        </div>
        <div class="productivity-bar reveal" style="margin-top:48px;">
          <span class="pb-label">Robot Productivity Comparison — Same Robot, Different Machine</span>
          <div style="margin:28px 0 10px;display:grid;grid-template-columns:1fr;gap:18px;">
            <div style="display:flex;flex-direction:column;gap:6px;">
              <div style="display:flex;justify-content:space-between;align-items:baseline;">
                <span style="font-family:'DM Mono',monospace;font-size:11px;color:rgba(232,224,208,0.7);letter-spacing:0.05em;">Traditional Lockstitch Type 301</span>
                <span style="font-family:'Cormorant Garamond',serif;font-size:22px;font-weight:600;color:#e07070;">45–50%</span>
              </div>
              <div style="height:28px;background:rgba(255,255,255,0.06);border-radius:2px;overflow:hidden;position:relative;">
                <div style="height:100%;width:47%;background:linear-gradient(90deg,#c0392b,#e57373);border-radius:2px;display:flex;align-items:center;padding-left:10px;">
                  <span style="font-family:'DM Mono',monospace;font-size:10px;color:#fff;white-space:nowrap;">Bottlenecked by bobbin — 35–45% of shift lost</span>
                </div>
              </div>
            </div>
            <div style="display:flex;flex-direction:column;gap:6px;">
              <div style="display:flex;justify-content:space-between;align-items:baseline;">
                <span style="font-family:'DM Mono',monospace;font-size:11px;color:rgba(232,224,208,0.7);letter-spacing:0.05em;">Chain Stitch Type 401 (traditional)</span>
                <span style="font-family:'Cormorant Garamond',serif;font-size:22px;font-weight:600;color:#e0a050;">60–65%</span>
              </div>
              <div style="height:28px;background:rgba(255,255,255,0.06);border-radius:2px;overflow:hidden;position:relative;">
                <div style="height:100%;width:62%;background:linear-gradient(90deg,#b8860b,#d4a855);border-radius:2px;display:flex;align-items:center;padding-left:10px;">
                  <span style="font-family:'DM Mono',monospace;font-size:10px;color:#fff;white-space:nowrap;">Improved — but eye-looper still limits speed &amp; reliability</span>
                </div>
              </div>
            </div>
            <div style="display:flex;flex-direction:column;gap:6px;">
              <div style="display:flex;justify-content:space-between;align-items:baseline;">
                <span style="font-family:'DM Mono',monospace;font-size:11px;color:rgba(232,224,208,0.7);letter-spacing:0.05em;">ZARIF 2025 — New Chain Stitch Type 401</span>
                <span style="font-family:'Cormorant Garamond',serif;font-size:28px;font-weight:600;color:#c5a04d;">95%+</span>
              </div>
              <div style="height:36px;background:rgba(255,255,255,0.06);border-radius:2px;overflow:hidden;position:relative;">
                <div style="height:100%;width:95%;background:linear-gradient(90deg,#c5a04d,#e0c070);border-radius:2px;display:flex;align-items:center;padding-left:14px;">
                  <span style="font-family:'DM Mono',monospace;font-size:10px;color:#1a1500;font-weight:600;white-space:nowrap;">Zero bobbin · Zero adjustment · 24/7 autonomous operation</span>
                </div>
              </div>
            </div>
          </div>
          <div style="display:flex;gap:24px;justify-content:center;margin-top:20px;flex-wrap:wrap;">
            <span style="font-family:'DM Mono',monospace;font-size:9px;letter-spacing:0.12em;text-transform:uppercase;color:#e07070;">▬ Type 301: 45–50%</span>
            <span style="font-family:'DM Mono',monospace;font-size:9px;letter-spacing:0.12em;text-transform:uppercase;color:#d4a855;">▬ Type 401 old: 60–65%</span>
            <span style="font-family:'DM Mono',monospace;font-size:9px;letter-spacing:0.12em;text-transform:uppercase;color:#c5a04d;">▬ ZARIF 2025 new Type 401: 95%+</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="economics">
      <div class="wrap">
        <span class="section-tag">The Business Case</span>
        <h2>Economics of a <em>Robot Sewing Factory</em></h2>
        <div class="reveal">
          <p>For the first time in history, the economics of a fully robotic garment factory are viable. The following figures are based on a 100-station ZARIF 2025 robot sewing facility, modeled in the ZARIF 2025 master technical document.</p>
        </div>
        <div class="econ-grid reveal">
          <div class="econ-card">
            <span class="econ-num">$3.8M</span>
            <span class="econ-lbl">Capital Expenditure</span>
            <span class="econ-sub">100-station robot factory</span>
          </div>
          <div class="econ-card">
            <span class="econ-num">11.1</span>
            <span class="econ-lbl">Months to Payback</span>
            <span class="econ-sub">24/7 operation vs. 2-shift human</span>
          </div>
          <div class="econ-card">
            <span class="econ-num">$34.6M</span>
            <span class="econ-lbl">10-Year NPV</span>
            <span class="econ-sub">Net Present Value projection</span>
          </div>
          <div class="econ-card">
            <span class="econ-num">$2.36T</span>
            <span class="econ-lbl">Total Market</span>
            <span class="econ-sub">Global apparel &amp; textile industry</span>
          </div>
          <div class="econ-card">
            <span class="econ-num">95%+</span>
            <span class="econ-lbl">Robot Productivity</span>
            <span class="econ-sub">vs. 45–50% on traditional machines</span>
          </div>
          <div class="econ-card">
            <span class="econ-num">$400–900B</span>
            <span class="econ-lbl">Addressable Market</span>
            <span class="econ-sub">Sewing machine equipment segment</span>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section" id="partnership">
      <div class="cta-inner">
        <span class="section-tag" style="justify-content:center;display:block;">Series A · Now Open</span>
        <h2>Invest in <em>ZARIF 2025</em></h2>
        <p style="max-width:700px;margin:0 auto 36px;">We are raising Series A to establish <strong>ZARIF Sewing Technology Company</strong> in the United States — the world's first company dedicated exclusively to robot-native sewing technology. Three types of strategic partners are welcome.</p>
        <div class="invest-hero">
          <span class="invest-amount">$40–50M</span>
          <span class="invest-label">Series A Target · To Establish ZARIF Sewing Technology Company · USA</span>
          <p class="invest-desc">Capital will fund company incorporation, facility, up to 5 industrial prototype machines, patent filings (US + PCT), full AI and humanoid robot integration testing, and launch of serial production — all within 36 months.</p>
        </div>
        <div class="invest-tracks">
          <div class="invest-track">
            <span class="invest-track-num">Track 01</span>
            <div class="invest-track-title">Financial Investors</div>
            <span class="invest-track-equity">20–30%</span>
            <p class="invest-track-desc">Venture capital, family offices, sovereign funds. You provide growth capital and market access. We provide equity in ZARIF Sewing Technology Company (USA) and first-mover position in a $2.36T industry with zero working competition.</p>
          </div>
          <div class="invest-track">
            <span class="invest-track-num">Track 02</span>
            <div class="invest-track-title">AI Technology Companies</div>
            <span class="invest-track-equity">10–20%</span>
            <p class="invest-track-desc">Your AI becomes the permanent intelligence layer in every ZARIF machine ever built — plus equity and exclusive <em>"Powered by [Your AI]"</em> branding on all machines worldwide, and access to unique physical-AI sewing datasets unavailable anywhere else.</p>
            <div style="margin-top:14px;display:flex;flex-wrap:wrap;gap:6px;">
              <span style="font-family:'DM Mono',monospace;font-size:8px;letter-spacing:0.12em;text-transform:uppercase;padding:4px 10px;border:1px solid rgba(197,160,77,0.35);color:rgba(232,224,208,0.7);">NVIDIA</span>
              <span style="font-family:'DM Mono',monospace;font-size:8px;letter-spacing:0.12em;text-transform:uppercase;padding:4px 10px;border:1px solid rgba(197,160,77,0.35);color:rgba(232,224,208,0.7);">Google DeepMind</span>
              <span style="font-family:'DM Mono',monospace;font-size:8px;letter-spacing:0.12em;text-transform:uppercase;padding:4px 10px;border:1px solid rgba(197,160,77,0.35);color:rgba(232,224,208,0.7);">Microsoft Azure AI</span>
              <span style="font-family:'DM Mono',monospace;font-size:8px;letter-spacing:0.12em;text-transform:uppercase;padding:4px 10px;border:1px solid rgba(197,160,77,0.35);color:rgba(232,224,208,0.7);">Anthropic</span>
              <span style="font-family:'DM Mono',monospace;font-size:8px;letter-spacing:0.12em;text-transform:uppercase;padding:4px 10px;border:1px solid rgba(197,160,77,0.35);color:rgba(232,224,208,0.7);">OpenAI</span>
              <span style="font-family:'DM Mono',monospace;font-size:8px;letter-spacing:0.12em;text-transform:uppercase;padding:4px 10px;border:1px solid rgba(197,160,77,0.35);color:rgba(232,224,208,0.7);">Meta AI</span>
              <span style="font-family:'DM Mono',monospace;font-size:8px;letter-spacing:0.12em;text-transform:uppercase;padding:4px 10px;border:1px solid rgba(197,160,77,0.35);color:rgba(232,224,208,0.7);">Amazon AWS AI</span>
              <span style="font-family:'DM Mono',monospace;font-size:8px;letter-spacing:0.12em;text-transform:uppercase;padding:4px 10px;border:1px solid rgba(197,160,77,0.35);color:rgba(232,224,208,0.7);">Apple Intelligence</span>
              <span style="font-family:'DM Mono',monospace;font-size:8px;letter-spacing:0.12em;text-transform:uppercase;padding:4px 10px;border:1px solid rgba(197,160,77,0.35);color:rgba(232,224,208,0.7);">Qualcomm AI</span>
              <span style="font-family:'DM Mono',monospace;font-size:8px;letter-spacing:0.12em;text-transform:uppercase;padding:4px 10px;border:1px solid rgba(197,160,77,0.35);color:rgba(232,224,208,0.7);">Baidu AI</span>
            </div>
          </div>
          <div class="invest-track">
            <span class="invest-track-num">Track 03</span>
            <div class="invest-track-title">Humanoid Robot Companies</div>
            <span class="invest-track-equity">10–20%</span>
            <p class="invest-track-desc">Tesla, Figure AI, Unitree, Sanctuary AI. Your robot meets its first killer industrial application. Equity + "Preferred Robot Partner" status + ZARIF digital twin models for robot training + co-branded autonomous cell installations.</p>
          </div>
        </div>
        <div class="invest-rounds">
          <div class="invest-round active">
            <span class="invest-badge">NOW OPEN</span>
            <span class="invest-round-tag open">Series A · Open</span>
            <span class="invest-round-amount">$40–50M</span>
            <div class="invest-round-name">Foundation &amp; Validation</div>
            <ul class="invest-round-items">
              <li>Incorporate ZARIF Sewing Technology Co. in USA</li>
              <li>Build up to 5 industrial prototype machines</li>
              <li>File 3 US + PCT patents</li>
              <li>Full robot + AI integration testing</li>
              <li>Launch serial production (Year 3)</li>
            </ul>
          </div>
          <div class="invest-round">
            <span class="invest-round-tag future">Series B · Future</span>
            <span class="invest-round-amount">TBD</span>
            <div class="invest-round-name">Scale-Up</div>
            <ul class="invest-round-items">
              <li>Size set after Series A milestones</li>
              <li>Scale to 3,000–6,000 machines/year</li>
              <li>Enter US, EU, Asian markets</li>
              <li>Deploy autonomous sewing cells</li>
            </ul>
          </div>
          <div class="invest-round">
            <span class="invest-round-tag future">Series C · Future</span>
            <span class="invest-round-amount">TBD</span>
            <div class="invest-round-name">Full Ecosystem</div>
            <ul class="invest-round-items">
              <li>Size set after Series B milestones</li>
              <li>Complete autonomous factory</li>
              <li>ZARIF logistics robots deployed</li>
              <li>IPO or strategic acquisition</li>
            </ul>
          </div>
        </div>
        <div class="invest-nda">
          <h3>Upon Signing NDA — Full Access to:</h3>
          <div class="invest-nda-items">
            <span class="invest-nda-item">Full Technical Specification</span>
            <span class="invest-nda-item">Engineering Drawings</span>
            <span class="invest-nda-item">Financial Model</span>
            <span class="invest-nda-item">Patent Documentation</span>
            <span class="invest-nda-item">Prototype Test Reports</span>
            <span class="invest-nda-item">Robot Integration Blueprint</span>
            <span class="invest-nda-item">Series A Term Sheet Draft</span>
            <span class="invest-nda-item">Autonomous Factory Design</span>
          </div>
          <p style="font-size:13px;color:rgba(232,224,208,0.55);margin:0;">Contact: <strong style="color:#c5a04d;"><a href="mailto:zarif1961@gmail.com">zarif1961@gmail.com</a></strong> · www.zarif.uz · Response within 48 hours.</p>
        </div>
      </div>
    </section>
  `;

  return new Response(htmlContent);
}
