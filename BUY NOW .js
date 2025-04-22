// Model data
const models = {
    standard: {
        name: "NeuroWheel Standard",
        price:25000,
        features: [
            "Brain Control Sensitivity: Basic 2-level command recognition ",
            "Battery Life: Up to 4 hours",
            "Sensor System: Basic EEG headband",
            "Basic obstacle avoidance",
            "1-year warranty"
        ]
    },
    premium: {
        name: "NeuroWheel Premium",
        price:35000,
        features: [
            "Brain Control Sensitivity: Multi-command recognition ",
            "Battery Life: Up to 6 hours",
            "Sensor System: Advanced EEG headset with motion detection",
            "Advanced obstacle detection and avoidance",
            "3-year warranty"
        ]
    },
    ultimate: {
        name: "NeuroWheel Ultimate",
        price:50000,
        features: [
            "Brain Control Sensitivity: Real-time adaptive AI control ",
            "Battery Life: Up to 10 hours",
            "Sensor System: EEG + EMG integration with advanced multi-sensing",
            "Obstacle Detection: Ultrasonic + IR + LIDAR",
            "Voice control backup system",
            "Lifetime software updates"
        ]
    }
};

// DOM elements
const modelButtons = document.querySelectorAll('.model-button');
const quantityInput = document.getElementById('quantity');
const modelNameEl = document.getElementById('model-name');
const totalPriceEl = document.getElementById('total-price');
const buyButtonEl = document.getElementById('buy-button');
const featuresContainer = document.getElementById('features-container');

// Current state
let currentModel = 'standard';
let quantity = 1;

// Format price as currency
function formatPrice(price) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).format(price);
}

// Update displayed features
function updateFeatures() {
    featuresContainer.innerHTML = '';
    models[currentModel].features.forEach(feature => {
        const li = document.createElement('li');
        li.innerHTML = `<span>✓</span><span>${feature}</span>`;
        featuresContainer.appendChild(li);
    });
}

// Update price display
function updatePrice() {
    const totalPrice = models[currentModel].price * quantity;
    totalPriceEl.textContent = formatPrice(totalPrice);
    buyButtonEl.textContent = `Buy Now - ${formatPrice(totalPrice)}`;
}

// Update all displays
function updateDisplay() {
    modelNameEl.textContent = models[currentModel].name;
    updatePrice();
    updateFeatures();
}

// Set up event listeners
modelButtons.forEach(button => {
    button.addEventListener('click', function() {
        const modelType = this.getAttribute('data-model');
        
        // Remove active class from all buttons
        modelButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Update state and display
        currentModel = modelType;
        updateDisplay();
    });
});

quantityInput.addEventListener('change', function() {
    quantity = Math.max(1, parseInt(this.value) || 1);
    this.value = quantity; // Ensure display shows valid number
    updatePrice();
});
// Set up event listeners for FAQ toggle

  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const item = question.closest('.faq-item');

      // Toggle active state
      item.classList.toggle('active');

      // Optional: Change + to –
      const toggle = question.querySelector('.faq-toggle');
      toggle.textContent = item.classList.contains('active') ? '−' : '+';
    });
  });
//buy now button navigation
  document.getElementById('buy-button').addEventListener('click', function() {
    window.location.href = 'bill generate.html';
  });


// Initialize display
updateDisplay();
