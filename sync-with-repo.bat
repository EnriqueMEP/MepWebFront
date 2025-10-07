@echo off
REM Script para sincronizar el proyecto local con el repositorio
REM Intenta hacer merge en lugar de reemplazar completamente
REM Uso: sync-with-repo.bat

echo ===========================================
echo   SINCRONIZAR CON REPOSITORIO
echo   MepWebFront - Design System
echo ===========================================

REM Cambiar al directorio del proyecto
cd /d "%~dp0"

echo [1/5] Verificando estado actual...
git status
echo.

echo [2/5] Obteniendo ultima version del repositorio...
git fetch origin
if %errorlevel% neq 0 (
    echo Error al obtener datos del repositorio.
    goto :ERROR
)
echo.

echo [3/5] Guardando cambios locales...
git add .
git commit -m "Auto-save antes de sincronizar - %date% %time%" 2>nul
echo.

echo [4/5] Sincronizando con repositorio remoto...
git pull origin main 2>nul || git pull origin master 2>nul
if %errorlevel% neq 0 (
    echo Conflictos detectados o error en pull.
    echo Intenta resolver manualmente con:
    echo   git status
    echo   git merge --abort  (para cancelar)
    goto :ERROR
)
echo.

echo [5/5] Verificando resultado...
git status
echo.

echo ===========================================
echo   SINCRONIZACION COMPLETADA
echo ===========================================
echo.
echo Tu proyecto local ahora esta sincronizado
echo con la version del repositorio remoto.
echo.
goto :END

:ERROR
echo.
echo ===========================================
echo   ERROR EN LA SINCRONIZACION
echo ===========================================
echo.
echo Hubo un error durante la sincronizacion.
echo Revisa el estado con: git status
echo.

:END
echo Presiona cualquier tecla para continuar...
pause >nul