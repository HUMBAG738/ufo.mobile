        function drawBossEnding() {
            // Black Background
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

            if (!imgLezy.complete) return;

            // Lezy Dimensions
            const lWidth = 150;
            const lRatio = imgLezy.height / imgLezy.width;
            const lHeight = lWidth * lRatio;

            // Lift Animation (Phase 4)
            if (abductionPhase >= 4) {
                 // Lift speed approx. 2px per frame?
                 // Or calculated based on timing (startUfoAbduction sets timing)
                 // Let's use simple upward movement interactively or calculate from time
                 // Since we don't have delta time passed easily here without modifying draw signature deeply
                 // We will just move it up if not paused.
                 lezyAnimY -= 1.5; 
            }

            // Draw Lezy
            // Ensure not too high (disappears into UFO)
            // UFO Beam ends at ufoY + 280?
            
            // Draw UFO First (Behind? Or Front? Beam should be behind player usually)
            // Actually Beam covers player usually.
            
            drawUFO();

            // Draw Lezy (if not completely gone)
            if (lezyAnimY > -100) {
                ctx.drawImage(imgLezy, lezyAnimX, lezyAnimY, lWidth, lHeight);
            }
        }
