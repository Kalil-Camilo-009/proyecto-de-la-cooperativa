-- =======================================================
-- Base de Datos: DB_CoopAFAMI
-- Descripción: Creación de la base de datos y tabla de usuarios internos
-- =======================================================

-- 1. Crear la Base de Datos si no existe
IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'DB_CoopAFAMI')
BEGIN
    CREATE DATABASE DB_CoopAFAMI;
END
GO

USE DB_CoopAFAMI;
GO

-- 2. Crear la Tabla de Usuarios Internos
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Usuarios]') AND type in (N'U'))
BEGIN
    CREATE TABLE [dbo].[Usuarios] (
        [Id] INT IDENTITY(1,1) PRIMARY KEY,
        [Nombre] VARCHAR(100) NOT NULL,
        [Usuario] VARCHAR(50) NOT NULL UNIQUE,
        -- Almacena la contraseña encriptada (Hash)
        [PasswordHash] VARCHAR(255) NOT NULL,
        [Rol] VARCHAR(30) NOT NULL DEFAULT 'Administrador',
        [Activo] BIT NOT NULL DEFAULT 1,
        [FechaCreacion] DATETIME NOT NULL DEFAULT GETDATE()
    );
END
GO

-- 3. Insertar un usuario administrador por defecto para la primera entrada
-- Nota: La contraseña está en texto plano temporalmente como "Admin123*" para tus pruebas iniciales.
-- En producción, esta contraseña debe estar encriptada con un algoritmo de hash (ej. BCrypt, SHA256 o PBKDF2).
IF NOT EXISTS (SELECT * FROM [dbo].[Usuarios] WHERE [Usuario] = 'admin')
BEGIN
    INSERT INTO [dbo].[Usuarios] ([Nombre], [Usuario], [PasswordHash], [Rol], [Activo])
    VALUES ('Administrador Global', 'admin', 'Admin123*', 'Administrador', 1);
END
GO

Select* 
from dbo.Usuarios; 