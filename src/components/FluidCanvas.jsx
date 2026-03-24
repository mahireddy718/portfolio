import React, { useEffect, useRef } from 'react';
import './FluidCanvas.css';

const FluidCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let particles = [];
    const maxParticles = 100;
    
    // Ambient Background Stars Setup
    let ambientStars = [];
    const numAmbientStars = 200;
    let isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';

    // Observe theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });

    class AmbientStar {
      constructor(canvasWidth, canvasHeight) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 1.5 + 0.5;
        this.baseOpacity = Math.random() * 0.5 + 0.3;
        this.twinkleSpeed = Math.random() * 0.002 + 0.001;
        this.twinklePhase = Math.random() * Math.PI * 2;
      }

      draw(ctx, timestamp) {
        // Calculate twinkling effect using sine wave over time
        const opacity = this.baseOpacity + Math.sin(timestamp * this.twinkleSpeed + this.twinklePhase) * 0.3;
        
        ctx.save();
        ctx.globalAlpha = Math.max(0, opacity);
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = 5;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const initAmbientStars = () => {
      ambientStars = [];
      for (let i = 0; i < numAmbientStars; i++) {
        ambientStars.push(new AmbientStar(window.innerWidth, window.innerHeight));
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initAmbientStars(); // Recreate stars on resize so they fill the new area
    };

    window.addEventListener('resize', resize);
    resize();

    // Interactive Star Trails logic
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.opacity = 1;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= 0.015;
        this.size -= 0.02;
        this.rotation += this.rotationSpeed;
      }

      draw() {
        if (this.size <= 0 || this.opacity <= 0) return;
        
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.opacity;
        
        // Glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
        ctx.fillStyle = '#fff';
        
        // Draw a star shape (4 points)
        ctx.beginPath();
        for (let i = 0; i < 4; i++) {
          ctx.lineTo(0, -this.size * 2);
          ctx.rotate(Math.PI / 2);
        }
        ctx.closePath();
        ctx.fill();
        
        ctx.restore();
      }
    }

    const handleMouseMove = (e) => {
      for (let i = 0; i < 2; i++) {
        if (particles.length < maxParticles) {
          particles.push(new Particle(e.clientX, e.clientY));
        }
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        for (let i = 0; i < 2; i++) {
          if (particles.length < maxParticles) {
            particles.push(new Particle(touch.clientX, touch.clientY));
          }
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    const animate = (timestamp) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background ambient stars only in dark mode
      if (isDarkMode) {
        ambientStars.forEach(star => star.draw(ctx, timestamp || performance.now()));
      }
      
      // Draw interactive particle trail
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw();
        
        if (particles[i].opacity <= 0 || particles[i].size <= 0) {
          particles.splice(i, 1);
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate(performance.now());

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fluid-canvas" />;
};

export default FluidCanvas;
