<template>
  <header class="header-container">
    <div class="header-content">
      <!-- Icon with animation -->
      <div class="icon-wrapper">
        <i class="bi bi-calculator-fill"></i>
      </div>

      <!-- Main title -->
      <h1 class="title">Calculadora Aritmética</h1>

      <!-- Subtitle -->
      <p class="subtitle">
        <i class="bi bi-lightning-charge-fill"></i>
        Cálculos instantâneos e precisos
      </p>
    </div>
  </header>
</template>

<style scoped>
.header-container {
  text-align: center;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 24px 24px 0 0;
  position: relative;
  overflow: hidden;
}

.header-container::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

.header-content {
  position: relative;
  z-index: 1;
}

.icon-wrapper {
  margin-bottom: 1rem;
  animation: bounce 2s ease-in-out infinite;
}

.icon-wrapper i {
  font-size: 3.5rem;
  color: white;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2));
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.title {
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  margin: 0.5rem 0;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  letter-spacing: -0.5px;
}

.subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.95);
  margin: 0.5rem 0 0;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.subtitle i {
  font-size: 1.2rem;
  animation: flash 2s ease-in-out infinite;
}

@keyframes flash {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
}

@media (max-width: 768px) {
  .header-container {
    padding: 1.5rem 1rem;
    border-radius: 20px 20px 0 0;
  }

  .icon-wrapper i {
    font-size: 2.5rem;
  }

  .title {
    font-size: 1.75rem;
  }

  .subtitle {
    font-size: 0.95rem;
  }
}
</style>
