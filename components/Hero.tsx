'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useInView } from 'react-intersection-observer';

// Register GSAP plugin
gsap.registerPlugin(SplitText);

export function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Check if mobile on mount and resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (inView) {
      // Image Animation (different for mobile and desktop)
      if (imageContainerRef.current) {
        const img = imageContainerRef.current.querySelector('img');
        const overlay = imageContainerRef.current.querySelector('.overlay');
        
        if (img && overlay) {
          const imageTimeline = gsap.timeline();
          
          if (isMobile) {
            // Mobile animation - comes from bottom
            imageTimeline
              .fromTo(
                img,
                {
                  scale: 1.1,
                  opacity: 0,
                  y: 50
                },
                {
                  scale: 1,
                  opacity: 1,
                  y: 0,
                  duration: 1.2,
                  ease: 'power3.out'
                }
              );
          } else {
            // Desktop animation - comes from left
            imageTimeline
              .fromTo(
                img,
                {
                  scale: 1.2,
                  opacity: 0,
                  x: -50
                },
                {
                  scale: 1,
                  opacity: 1,
                  x: 0,
                  duration: 1.2,
                  ease: 'power3.out'
                }
              )
              .fromTo(
                overlay,
                {
                  opacity: 0,
                  x: -100
                },
                {
                  opacity: 0.8,
                  x: 0,
                  duration: 1,
                  ease: 'power2.out'
                },
                '-=0.8'
              );
          }
        }
      }

      // Content Animation (same for both mobile and desktop)
      const heading = contentRef.current?.querySelector('h1');
      if (!heading) return;

      const splitText = new SplitText(heading, { type: 'chars,words,lines' });

      const contentTimeline = gsap.timeline();
      contentTimeline
        .fromTo(
          splitText.chars,
          {
            y: 60,
            opacity: 0,
            scale: 0.7,
            rotationX: 30
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationX: 0,
            duration: 0.8,
            stagger: 0.02,
            ease: 'back.out(1.4)',
            filter: 'blur(0px)',
            onStart: () => {
              gsap.set(splitText.chars, { filter: 'blur(5px)' });
            },
            onComplete: () => {
              gsap.to(splitText.chars, { filter: 'blur(0px)', duration: 0.3 });
            }
          }
        );

      const paragraph = contentRef.current?.querySelector('p');
      if (paragraph) {
        contentTimeline.fromTo(
          paragraph,
          {
            y: 40,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out'
          },
          '-=0.4'
        );
      }

      const buttons = contentRef.current?.querySelectorAll('.button-container button');
      if (buttons) {
        contentTimeline.fromTo(
          buttons,
          {
            y: 30,
            opacity: 0,
            scale: 0.8
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.15,
            ease: 'elastic.out(1, 0.7)'
          },
          '-=0.3'
        );

        // Add glow effect to buttons on hover
        buttons.forEach((btn) => {
          btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
              duration: 0.3,
              ease: 'power2.out'
            });
          });
          btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
              boxShadow: '0 0 0 rgba(59, 130, 246, 0)',
              duration: 0.3,
              ease: 'power2.out'
            });
          });
        });
      }

      // Canvas Particle Animation
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        let animationFrameId: number;

        // Set canvas size
        const resizeCanvas = () => {
          canvas.width = canvas.offsetWidth;
          canvas.height = canvas.offsetHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Particle system
        const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 3 + 1
          });
        }

        const draw = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // Draw particles and connections
          particles.forEach((p, i) => {
            // Update position
            p.x += p.vx;
            p.y += p.vy;

            // Bounce off edges
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

            // Draw particle
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(245, 245, 245, 1)';
            ctx.fill();

            // Draw connections
            for (let j = i + 1; j < particles.length; j++) {
              const p2 = particles[j];
              const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
              if (dist < 100) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = `rgba(59, 130, 246, ${1 - dist / 100})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }
          });

          animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        // Clean up
        return () => {
          window.removeEventListener('resize', resizeCanvas);
          cancelAnimationFrame(animationFrameId);
        };
      }
    }
  }, [inView, isMobile]);

  return (
    <section 
      ref={ref}
      className="relative 
       bg-background min-h-screen overflow-hidden"
    >
      <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-screen">
        {/* Content Section - Always first on mobile, right side on desktop */}
        <div
          ref={contentRef}
          className="w-full pt-40 h-full bg-[#1A3C34] flex items-center justify-center p-8 relative order-1 lg:order-2"
        >
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
          />
          <div className="relative text-center lg:text-left px-4 sm:px-6 lg:px-8 max-w-2xl z-10">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              <span className="block">Using AI to build</span>
              <span className="block">the modern power</span>
              <span className="block">company.</span>
            </h1>

            <p 
              className="text-lg text-white/80 mb-8"
            >
              Revolutionizing energy infrastructure with artificial intelligence and machine learning.
            </p>

            <div className="button-container flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                className="px-8 py-3 bg-[#031209] text-white font-medium rounded-full shadow-lg"
              >
                Get Started
              </button>
              <button
                className="px-8 py-3 bg-transparent border-2 border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Image Section - Second on mobile, left side on desktop */}
        <div
          ref={imageContainerRef}
          className="w-full h-[50vh] lg:h-full bg-[#1A3C34] flex items-center justify-center relative overflow-hidden order-2 lg:order-1"
        >
          <div className="relative w-full h-full">
            <Image
              src="/hero.avif"
              alt="Abstract Modern Structure"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
              onError={() => console.error('Failed to load hero image')}
            />
            <div className="overlay absolute inset-0 bg-gradient-to-r from-[#1A3C34]/80 to-transparent lg:block hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}