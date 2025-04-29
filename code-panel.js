// code-panel.js - Contains all interactive code panel functionality with unique class names

// Initialize the code panel
function initCodePanel(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  // Create the HTML structure for the code panel
  container.innerHTML = `
    <div class="cp-code-panel"> 
      <div class="cp-editor">
        <pre class="cp-code">
<div class="cp-input-line"><span class="cp-keyword">const </span> <span class="cp-variable">visitorName</span> = <input type="text" id="cp-name-input" placeholder="Enter your name"></div>
<span class="cp-keyword">return</span> <span class="cp-string">\${greeting} \${visitorName}! Welcome to my portfolio. How can I help you today?</span>;
</pre>
        <button class="cp-button" onclick="runCodePanel()">Run Code</button>
      </div>
      <div class="cp-output">
        <div class="cp-output-header">
          <span class="cp-output-indicator"></span>
          Console Output
        </div>
        <div id="cp-output-content"></div>
      </div>
    </div>
  `;
  
  // Add event listener for Enter key on input field
  const nameInput = document.getElementById('cp-name-input');
  if (nameInput) {
    nameInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        runCodePanel();
      }
    });
  }
}

// Run the code panel when the button is clicked
function runCodePanel() {
  const visitorName = document.getElementById('cp-name-input').value.trim() || "Guest";
  const outputContent = document.getElementById('cp-output-content');
  outputContent.innerHTML = "";
  
 // Get current time for greeting
 const time = new Date().getHours();
 let greeting;
 
 if (time < 12) {
   greeting = "Good morning";
 } else if (time < 18) {
   greeting = "Good afternoon";
 } else {
   greeting = "Good evening";
 }
 
 const message = `${greeting}, ${visitorName}! Welcome to my portfolio. How can I help you today?`;
  
  // Clear any existing classes
  outputContent.className = "cp-output-content";
  
  // Add typing animation effect
  setTimeout(() => {
    outputContent.textContent = message;
    outputContent.classList.add("cp-typing-animation");
  }, 300);
}

// Add CSS styles for the code panel
function addCodePanelStyles() {
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    .cp-code-panel {
      --cp-background: #1e1e2e;
      --cp-text: #cdd6f4;
      --cp-comment: #7f849c;
      --cp-keyword: #cba6f7;
      --cp-string: #a6e3a1;
      --cp-variable: #89b4fa;
      --cp-function: #f38ba8;
      --cp-editor-bg: #181825;
      --cp-output-bg: #11111b;
      --cp-accent: #94e2d5;
      
      width: 100%;
      max-width: 550px;
      margin: 20px auto;
      
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      font-family: "JetBrains Mono", monospace;
      color: var(--cp-text);

    }
   
    .cp-dot {
      height: 12px;
      width: 12px;
      border-radius: 50%;
      margin-right: 6px;
    }
    
    .cp-red { background-color: #ff5f56; }
    .cp-yellow { background-color: #ffbd2e; }
    .cp-green { background-color: #27c93f; }
    
    .cp-title {
      margin-left: 10px;
      font-size: 14px;
      color: #aaa;
    }
    
    .cp-editor {
      background-color: var(--cp-editor-bg);
      padding: 16px;
      overflow: auto;
      line-height: 1.5;
    }
    
    .cp-code {
      margin: 0;
      white-space: pre-wrap;
      word-wrap: break-word;
      font-size: 14px;
      overflow-x: hidden;
    }
    
    .cp-keyword { color: var(--cp-keyword); }
    .cp-function { color: var(--cp-function); }
    .cp-string { color: var(--cp-string); word-break: break-word; }
    .cp-variable { color: var(--cp-variable); }
    .cp-comment { color: var(--cp-comment); }
    
    .cp-input-line {
      display: flex;
      margin: 10px 0;
      flex-wrap: wrap;
      align-items: center;
    }
    
    #cp-name-input {
      margin-left: 8px;
      background-color: rgba(255, 255, 255, 0.1);
      border: 1px solid var(--cp-accent);
      color: var(--cp-text);
      font-family: inherit;
      font-size: 14px;
      padding: 2px 6px;
      outline: none;
      width: 100%;
      max-width: 160px;
      box-sizing: border-box;
    }
    
    @media screen and (max-width: 480px) {
      .cp-input-line {
        flex-direction: row;
        align-items: flex-start;
      }
      
      #cp-name-input {
        margin-left: 0;
        margin-top: 8px;
        max-width: 100%;
      }
    }
    
    .cp-button {
      margin-top: 10px;
      background-color: var(--cp-accent);
      color: var(--cp-background);
      border: none;
      padding: 6px 14px;
      border-radius: 4px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.2s;
    }
    
    .cp-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
    
    .cp-output {
      background-color: var(--cp-output-bg);
      padding: 12px 16px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .cp-output-header {
      font-size: 12px;
      text-transform: uppercase;
      color: var(--cp-comment);
      margin-bottom: 8px;
      display: flex;
      align-items: center;
    }
    
    .cp-output-indicator {
      display: inline-block;
      width: 8px;
      height: 8px;
      background-color: var(--cp-accent);
      border-radius: 50%;
      margin-right: 6px;
    }
    
    #cp-output-content {
      font-size: 14px;
      line-height: 1.5;
      min-height: 24px;
      word-wrap: break-word;
    }
    
    .cp-typing-animation {
      overflow: hidden;
      border-right: 2px solid var(--cp-accent);
      white-space: normal;
      margin: 0;
      animation: cp-typing 3.5s steps(40, end), cp-blink-caret 0.75s step-end infinite;
    }
    
    @keyframes cp-typing {
      from { width: 0 }
      to { width: 100% }
    }
    
    @keyframes cp-blink-caret {
      from, to { border-color: transparent }
      50% { border-color: var(--cp-accent); }
    }
  `;
  document.head.appendChild(styleElement);
}

// Initialize everything
function loadCodePanel(containerId) {
  // Add styles first
  addCodePanelStyles();
  // Then create the panel
  initCodePanel(containerId);
}

// Export functions for public use
window.CodePanel = {
  load: loadCodePanel,
  run: runCodePanel
};