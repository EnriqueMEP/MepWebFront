@echo off
REM Script para actualizar el repositorio GitHub
REM Uso: update-repo.bat "mensaje del commit"

echo ===========================================
echo   ACTUALIZANDO REPOSITORIO GITHUB
echo   MepWebFront - Design System
echo ===========================================

REM Verificar si se paso un mensaje de commit
if "%~1"=="" (
    set COMMIT_MSG=Update: automated commit from update-repo.bat
) else (
    set COMMIT_MSG=%~1
)

echo Mensaje de commit: %COMMIT_MSG%
echo.

REM Cambiar al directorio del proyecto
cd /d "%~dp0"

echo [1/4] Verificando estado del repositorio...
git status
echo.

echo [2/4] Añadiendo todos los cambios...
git add .
echo.

echo [3/4] Creando commit...
git commit -m "%COMMIT_MSG%"
if %errorlevel% neq 0 (
    echo No hay cambios para commitear.
    goto :END
)
echo.

echo [4/4] Subiendo cambios a GitHub...
git push origin master
echo.

echo ===========================================
echo   ACTUALIZACION COMPLETADA
echo ===========================================

:END
echo.
echo Presiona cualquier tecla para continuar...
pause >nul