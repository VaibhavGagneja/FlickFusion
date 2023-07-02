-- Insert 10 records into the Multiplex table
INSERT INTO [dbo].[Multiplex] ([MultiplexName])
SELECT 'Multiplex ' + CAST(Numbers.Number AS VARCHAR)
FROM (VALUES (1),(2),(3),(4),(5),(6),(7),(8),(9),(10)) AS Numbers(Number)

-- Insert 10 records into the Movie table
INSERT INTO [dbo].[Movie] ([MovieName], [MovieDescription], [MovieLanguage], [MovieImage], [MovieDuration], [MovieType])
SELECT 
    'Movie ' + CAST(Numbers.Number AS VARCHAR),
    'Description for Movie ' + CAST(Numbers.Number AS VARCHAR),
    'Language ' + CAST(Numbers.Number AS VARCHAR),
    'image_url_' + CAST(Numbers.Number AS VARCHAR),
    'Duration ' + CAST(Numbers.Number AS VARCHAR),
    'Type ' + CAST(Numbers.Number AS VARCHAR)
FROM (VALUES (1),(2),(3),(4),(5),(6),(7),(8),(9),(10)) AS Numbers(Number)

-- Insert 10 records into the Registers table with Base64 encoded passwords
INSERT INTO [dbo].[Registers] ([MobileNo], [Name], [Email], [Password], [RegType])
SELECT 
    ABS(CHECKSUM(NEWID())) % 9999999999 + 1000000000,
    'User ' + CAST(Numbers.Number AS VARCHAR),
    'email_' + CAST(Numbers.Number AS VARCHAR) + '@example.com',
    CONVERT(VARCHAR(500), (SELECT CONVERT(VARBINARY(MAX), 'password_' + CAST(Numbers.Number AS VARCHAR)) FOR XML PATH(''), BINARY BASE64)),
    CASE 
        WHEN Numbers.Number % 3 = 0 THEN 'Customer'
        WHEN Numbers.Number % 3 = 1 THEN 'Admin'
        ELSE 'Application Owner'
    END
FROM (VALUES (1),(2),(3),(4),(5),(6),(7),(8),(9),(10)) AS Numbers(Number)



-- Insert 10 records into the Screen table
INSERT INTO [dbo].[Screen] ([totalSeats], [ScreenName], [MovieId], [MultiplexId])
SELECT 
    ABS(CHECKSUM(NEWID())) % 200 + 100,
    'Screen ' + CAST(ROW_NUMBER() OVER (ORDER BY Movies.MovieId, Multiplexes.MultiplexId) AS VARCHAR),
    Movies.MovieId,
    Multiplexes.MultiplexId
FROM (
    SELECT TOP 10 *, ROW_NUMBER() OVER (ORDER BY MovieId) AS rn FROM [dbo].[Movie]
) AS Movies
CROSS JOIN (
    SELECT TOP 10 *, ROW_NUMBER() OVER (ORDER BY MultiplexId) AS rn FROM [dbo].[Multiplex]
) AS Multiplexes
WHERE Movies.rn = Multiplexes.rn;



-- Insert 10 records into the seatMatrices table
INSERT INTO [dbo].[seatMatrices] ([MultiplexId], [ScreenId], [GoldSeats], [SilverSeats], [PremiumSeats], [OccupiedSeatsGold], [OccupiedSeatsSilver], [OccupiedSeatsPremium])
SELECT 
    Screens.MultiplexId,
    Screens.ScreenId,
    ABS(CHECKSUM(NEWID())) % 50 + 50,
    ABS(CHECKSUM(NEWID())) % 100 + 100,
    ABS(CHECKSUM(NEWID())) % 150 + 150,
    '',
    '',
    ''
FROM (SELECT TOP 10 * FROM [dbo].[Screen]) AS Screens

-- Insert 10 records into the Ticket table
INSERT INTO [dbo].[Ticket] ([Movietiming], [TicketType], [Price], [Quantity], [ScreenId], [MovieId], [MobileNo])
SELECT 
    CAST(CAST(ABS(CHECKSUM(NEWID())) % 12 + 8 AS VARCHAR) + ':00' AS TIME),
    'Type ' + CAST(ABS(CHECKSUM(NEWID())) % 3 + 1 AS VARCHAR),
    ABS(CHECKSUM(NEWID())) % 1000 + 500,
    ABS(CHECKSUM(NEWID())) % 5 + 1,
    Screens.ScreenId,
    Movies.MovieId,
    Registers.MobileNo
FROM (
    SELECT TOP 10 *, ROW_NUMBER() OVER (ORDER BY NEWID()) AS rn FROM [dbo].[Screen]
) AS Screens
JOIN (
    SELECT TOP 10 *, ROW_NUMBER() OVER (ORDER BY NEWID()) AS rn FROM [dbo].[Registers]
) AS Registers ON Screens.rn = Registers.rn
JOIN (
    SELECT TOP 10 *, ROW_NUMBER() OVER (ORDER BY NEWID()) AS rn FROM [dbo].[Movie]
) AS Movies ON Screens.rn = Movies.rn;



-- Insert 10 records into the Feedbacks table
INSERT INTO [dbo].[Feedbacks] ([FeedBack], [Rating], [MobileNo])
SELECT 
    'Feedback for Movie ' + CAST(Numbers.Number AS VARCHAR),
    ABS(CHECKSUM(NEWID())) % 5 + 1,
    Registers.MobileNo
FROM (
    SELECT TOP 10 *, ROW_NUMBER() OVER (ORDER BY MobileNo) AS rn FROM [dbo].[Registers]
) AS Registers
JOIN (
    SELECT TOP 10 *, ROW_NUMBER() OVER (ORDER BY Number) AS rn FROM (VALUES (1),(2),(3),(4),(5),(6),(7),(8),(9),(10)) AS Numbers(Number)
) AS Numbers ON Registers.rn = Numbers.rn;


