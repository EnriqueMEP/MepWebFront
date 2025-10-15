@echo off
echo ===============================================
echo    MEP Frontend - Detener Servidor
echo ===============================================
echo.

echo Buscando procesos de Node.js en puertos 3000-3010...
echo.

REM Buscar y mostrar procesos en puertos comunes
for /L %%i in (3000,1,3010) do (
    for /f "tokens=5" %%a in ('netstat -ano ^| findstr :%%i') do (
        if not "%%a"=="" (
            echo Puerto %%i ocupado por proceso %%a
            set /p kill="Deseas detener el proceso %%a? (y/n): "
            if /i "!kill!"=="y" (
                taskkill /PID %%a /F
                echo Proceso %%a detenido.
            )
        )
    )
)

echo.
echo Busqueda completada.
echo.

REM Opcion para matar todos los procesos de Node
echo.
set /p killall="Deseas detener TODOS los procesos de Node.js? (y/n): "
if /i "%killall%"=="y" (
    echo.
    echo Deteniendo todos los procesos de Node.js...
    taskkill /IM node.exe /F 2>nul
    if errorlevel 1 (
        echo No se encontraron procesos de Node.js ejecutandose.
    ) else (
        echo Todos los procesos de Node.js han sido detenidos.
    )
)

echo.
echo Presiona cualquier tecla para salir...
pause >nul