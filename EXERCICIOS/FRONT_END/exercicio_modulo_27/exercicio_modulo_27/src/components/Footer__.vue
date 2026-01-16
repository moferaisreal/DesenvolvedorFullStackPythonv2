<script setup lang="ts">
// Developer information
const developerInfo = {
  name: 'Marcelo Vitor Pires da Rocha',
  socials: [
    {
      platform: 'Twitter/X',
      url: 'https://x.com/moferapontotxt',
      icon: 'bi bi-twitter-x',
      color: '#000000',
    },
    {
      platform: 'Instagram',
      url: 'http://instagram.com/mrmarcelorocha',
      icon: 'bi bi-instagram',
      color: '#E4405F',
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/moferaisreal',
      icon: 'bi bi-github',
      color: '#333333',
    },
  ],
}
</script>

<template>
  <footer class="footer-container">
    <!-- Developer name -->
    <div class="developer-section">
      <div class="code-icon">
        <i class="bi bi-code-slash"></i>
      </div>
      <h4 class="developer-name">
        {{ developerInfo.name }}
      </h4>
    </div>

    <!-- Social links -->
    <div class="socials-section">
      <a
        v-for="(social, index) in developerInfo.socials"
        :key="social.platform"
        :href="social.url"
        target="_blank"
        rel="noopener noreferrer"
        class="social-link"
        :title="social.platform"
        :style="{ '--delay': `${index * 0.1}s`, '--hover-color': social.color }"
      >
        <i :class="social.icon"></i>
      </a>
    </div>

    <!-- Copyright info -->
    <div class="copyright-section">
      <p class="copyright-text">
        <i class="bi bi-c-circle"></i>
        {{ new Date().getFullYear() }} - Calculadora Aritmética
      </p>
      <p class="tech-stack">
        <span class="tech-badge">Vue.js</span>
        <span class="tech-separator">+</span>
        <span class="tech-badge">TypeScript</span>
        <span class="tech-separator">+</span>
        <span class="tech-badge">Bootstrap</span>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer-container {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2.5rem 2rem;
  text-align: center;
  border-radius: 0 0 24px 24px;
  position: relative;
  overflow: hidden;
}

.footer-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.5) 50%,
    transparent 100%
  );
}

/* Developer section */
.developer-section {
  margin-bottom: 1.5rem;
}

.code-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  margin-bottom: 0.75rem;
  backdrop-filter: blur(10px);
}

.code-icon i {
  font-size: 1.5rem;
  animation: rotate 3s ease-in-out infinite;
}

@keyframes rotate {
  0%,
  100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(10deg);
  }
}

.developer-name {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.5px;
}

/* Socials section */
.socials-section {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  background: white;
  border-radius: 50%;
  color: #667eea;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation: fadeInUp 0.6s ease-out backwards;
  animation-delay: var(--delay);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.social-link:hover {
  transform: translateY(-8px) scale(1.1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  color: var(--hover-color);
  background: white;
}

.social-link i {
  font-size: 1.4rem;
  transition: transform 0.3s ease;
}

.social-link:hover i {
  transform: scale(1.1);
}

/* Copyright section */
.copyright-section {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.copyright-text {
  margin: 0 0 0.75rem 0;
  font-size: 0.95rem;
  opacity: 0.95;
  font-weight: 500;
}

.copyright-text i {
  margin-right: 0.25rem;
}

.tech-stack {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 0;
  font-size: 0.9rem;
}

.tech-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  font-weight: 600;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.tech-separator {
  opacity: 0.7;
  font-weight: 300;
}

/* Responsive design */
@media (max-width: 768px) {
  .footer-container {
    padding: 2rem 1.5rem;
    border-radius: 0 0 20px 20px;
  }

  .developer-name {
    font-size: 1.1rem;
  }

  .social-link {
    width: 46px;
    height: 46px;
  }

  .social-link i {
    font-size: 1.2rem;
  }

  .tech-stack {
    font-size: 0.85rem;
  }

  .tech-badge {
    padding: 0.2rem 0.6rem;
  }
}

@media (max-width: 480px) {
  .socials-section {
    gap: 0.75rem;
  }

  .social-link {
    width: 44px;
    height: 44px;
  }
}
</style>
