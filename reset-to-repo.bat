@echo off
echo ====================================
echo RESETEAR LOCAL A VERSION DEL REPO
echo ====================================
echo.
echo ADVERTENCIA: Esto eliminara TODOS los cambios locales no guardados
echo y restaurara el codigo a la version del repositorio remoto.
echo.
set /p confirm="¿Estas seguro? (s/N): "
if /i "%confirm%" neq "s" (
    echo Operacion cancelada.
    pause
    exit /b
)

echo.
echo Guardando cambios actuales en stash (por seguridad)...
git stash push -m "Backup antes de reset - %date% %time%"

echo.
echo Obteniendo ultima version del repositorio...
git fetch origin

echo.
echo Reseteando branch local a la version remota...
git reset --hard origin/main

echo.
echo Limpiando archivos no rastreados...
git clean -fd

echo.
echo ====================================
echo RESET COMPLETADO
echo ====================================
echo.
echo Tu codigo local ahora coincide exactamente con el repositorio remoto.
echo Si necesitas recuperar cambios anteriores, usa: git stash list
echo Para aplicar el backup: git stash apply stash@{0}
echo.
pause