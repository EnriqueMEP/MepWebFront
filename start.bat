@echo off
echo ===============================================
echo    MEP Frontend - Design System
echo    Iniciando servidor de desarrollo...
echo ===============================================
echo.

REM Cambiar al directorio del proyecto
cd /d "C:\Users\MEP\MEP Projects Dropbox\WebMEP\mep-frontend"

REM Verificar si existe package.json
if not exist package.json (
    echo ERROR: No se encontro package.json en el directorio actual
    echo Verifica que estas en el directorio correcto del proyecto
    pause
    exit /b 1
)

REM Verificar si existe node_modules
if not exist node_modules (
    echo.
    echo No se encontro node_modules, instalando dependencias...
    echo.
    npm install
    if errorlevel 1 (
        echo.
        echo ERROR: Fallo la instalacion de dependencias
        pause
        exit /b 1
    )
)

echo.
echo Iniciando servidor de desarrollo...
echo.
echo Una vez iniciado, el proyecto estara disponible en:
echo http://localhost:3000 o http://localhost:3001
echo.
echo Presiona Ctrl+C para detener el servidor
echo.

REM Iniciar el servidor de desarrollo
npm run dev

REM Si el servidor se detiene, mostrar mensaje
echo.
echo Servidor detenido.
pause