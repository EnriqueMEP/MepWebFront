@echo off
echo ===============================================
echo    MEP Frontend - Setup y Mantenimiento
echo ===============================================
echo.
echo Selecciona una opcion:
echo.
echo 1. Instalar/Actualizar dependencias
echo 2. Limpiar cache de node_modules y reinstalar
echo 3. Limpiar cache de Vite
echo 4. Iniciar servidor de desarrollo
echo 5. Construir para produccion
echo 6. Salir
echo.
set /p option="Ingresa tu opcion (1-6): "

REM Cambiar al directorio del proyecto
cd /d "C:\Users\MEP\MEP Projects Dropbox\WebMEP\mep-frontend"

if "%option%"=="1" goto install
if "%option%"=="2" goto clean_install
if "%option%"=="3" goto clean_vite
if "%option%"=="4" goto start_dev
if "%option%"=="5" goto build
if "%option%"=="6" goto exit
goto invalid

:install
echo.
echo Instalando/Actualizando dependencias...
npm install
if errorlevel 1 (
    echo ERROR: Fallo la instalacion
    pause
    exit /b 1
)
echo.
echo Dependencias instaladas correctamente!
pause
goto end

:clean_install
echo.
echo Limpiando node_modules y package-lock.json...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
echo.
echo Reinstalando dependencias...
npm install
if errorlevel 1 (
    echo ERROR: Fallo la instalacion
    pause
    exit /b 1
)
echo.
echo Limpieza e instalacion completada!
pause
goto end

:clean_vite
echo.
echo Limpiando cache de Vite...
if exist node_modules\.vite rmdir /s /q node_modules\.vite
if exist dist rmdir /s /q dist
echo.
echo Cache de Vite limpiado!
pause
goto end

:start_dev
echo.
echo Iniciando servidor de desarrollo...
npm run dev
goto end

:build
echo.
echo Construyendo para produccion...
npm run build
if errorlevel 1 (
    echo ERROR: Fallo la construccion
    pause
    exit /b 1
)
echo.
echo Construccion completada! Archivos en carpeta 'dist'
pause
goto end

:invalid
echo.
echo Opcion invalida. Por favor selecciona 1-6.
pause
goto end

:exit
echo.
echo Saliendo...
goto end

:end