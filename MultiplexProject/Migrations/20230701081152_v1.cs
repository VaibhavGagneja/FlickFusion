using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MultiplexProject.Migrations
{
    public partial class v1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Movie",
                columns: table => new
                {
                    MovieId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MovieName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    MovieDescription = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    MovieLanguage = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    MovieImage = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MovieDuration = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    MovieType = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Movie", x => x.MovieId);
                });

            migrationBuilder.CreateTable(
                name: "Multiplex",
                columns: table => new
                {
                    MultiplexId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MultiplexName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Multiplex", x => x.MultiplexId);
                });

            migrationBuilder.CreateTable(
                name: "Registers",
                columns: table => new
                {
                    MobileNo = table.Column<long>(type: "bigint", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Password = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    RegType = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Registers", x => x.MobileNo);
                });

            migrationBuilder.CreateTable(
                name: "Screen",
                columns: table => new
                {
                    ScreenId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    totalSeats = table.Column<int>(type: "int", nullable: false),
                    ScreenName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    MovieId = table.Column<int>(type: "int", nullable: false),
                    MultiplexId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Screen", x => x.ScreenId);
                    table.ForeignKey(
                        name: "FK_Screen_Movie_MovieId",
                        column: x => x.MovieId,
                        principalTable: "Movie",
                        principalColumn: "MovieId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Screen_Multiplex_MultiplexId",
                        column: x => x.MultiplexId,
                        principalTable: "Multiplex",
                        principalColumn: "MultiplexId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "seatMatrices",
                columns: table => new
                {
                    MatrixId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MultiplexId = table.Column<int>(type: "int", nullable: false),
                    ScreenId = table.Column<int>(type: "int", nullable: false),
                    GoldSeats = table.Column<int>(type: "int", nullable: false),
                    SilverSeats = table.Column<int>(type: "int", nullable: false),
                    PremiumSeats = table.Column<int>(type: "int", nullable: false),
                    OccupiedSeatsGold = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    OccupiedSeatsSilver = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    OccupiedSeatsPremium = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_seatMatrices", x => x.MatrixId);
                    table.ForeignKey(
                        name: "FK_seatMatrices_Multiplex_MultiplexId",
                        column: x => x.MultiplexId,
                        principalTable: "Multiplex",
                        principalColumn: "MultiplexId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Feedbacks",
                columns: table => new
                {
                    FeedBackId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FeedBack = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    Rating = table.Column<int>(type: "int", nullable: false),
                    MobileNo = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Feedbacks", x => x.FeedBackId);
                    table.ForeignKey(
                        name: "FK_Feedbacks_Registers_MobileNo",
                        column: x => x.MobileNo,
                        principalTable: "Registers",
                        principalColumn: "MobileNo",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Ticket",
                columns: table => new
                {
                    TicketId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Movietiming = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TicketType = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Price = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Quantity = table.Column<int>(type: "int", nullable: false),
                    ScreenId = table.Column<int>(type: "int", nullable: false),
                    MovieId = table.Column<int>(type: "int", nullable: false),
                    MobileNo = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ticket", x => x.TicketId);
                    table.ForeignKey(
                        name: "FK_Ticket_Movie_MovieId",
                        column: x => x.MovieId,
                        principalTable: "Movie",
                        principalColumn: "MovieId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Ticket_Registers_MobileNo",
                        column: x => x.MobileNo,
                        principalTable: "Registers",
                        principalColumn: "MobileNo",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Feedbacks_MobileNo",
                table: "Feedbacks",
                column: "MobileNo");

            migrationBuilder.CreateIndex(
                name: "IX_Screen_MovieId",
                table: "Screen",
                column: "MovieId");

            migrationBuilder.CreateIndex(
                name: "IX_Screen_MultiplexId",
                table: "Screen",
                column: "MultiplexId");

            migrationBuilder.CreateIndex(
                name: "IX_seatMatrices_MultiplexId",
                table: "seatMatrices",
                column: "MultiplexId");

            migrationBuilder.CreateIndex(
                name: "IX_Ticket_MobileNo",
                table: "Ticket",
                column: "MobileNo");

            migrationBuilder.CreateIndex(
                name: "IX_Ticket_MovieId",
                table: "Ticket",
                column: "MovieId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Feedbacks");

            migrationBuilder.DropTable(
                name: "Screen");

            migrationBuilder.DropTable(
                name: "seatMatrices");

            migrationBuilder.DropTable(
                name: "Ticket");

            migrationBuilder.DropTable(
                name: "Multiplex");

            migrationBuilder.DropTable(
                name: "Movie");

            migrationBuilder.DropTable(
                name: "Registers");
        }
    }
}
