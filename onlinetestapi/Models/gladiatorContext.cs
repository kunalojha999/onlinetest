using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace onlinetestapi.Models
{
    public partial class gladiatorContext : DbContext
    {
        public gladiatorContext()
        {
        }

        public gladiatorContext(DbContextOptions<gladiatorContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Admins> Admins { get; set; }
        public virtual DbSet<Questions> Questions { get; set; }
        public virtual DbSet<Reports> Reports { get; set; }
        public virtual DbSet<Subjects> Subjects { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=MSI\\SQLEXPRESS;Database=gladiator;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Admins>(entity =>
            {
                entity.HasKey(e => e.Email)
                    .HasName("PK__Admins__A9D10535F2D17709");

                entity.Property(e => e.Email)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Questions>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Answer)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Body)
                    .IsRequired()
                    .HasColumnName("body")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.C1)
                    .IsRequired()
                    .HasColumnName("c1")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.C2)
                    .IsRequired()
                    .HasColumnName("c2")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.C3)
                    .IsRequired()
                    .HasColumnName("c3")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.C4)
                    .IsRequired()
                    .HasColumnName("c4")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Subid).HasColumnName("subid");

                entity.HasOne(d => d.Sub)
                    .WithMany(p => p.Questions)
                    .HasForeignKey(d => d.Subid)
                    .HasConstraintName("FK__Questions__subid__1ED998B2");
            });

            modelBuilder.Entity<Reports>(entity =>
            {
                entity.HasKey(e => e.Sno)
                    .HasName("PK__reports__DDDF64467367A55F");

                entity.ToTable("reports");

                entity.Property(e => e.Sno).HasColumnName("sno");

                entity.Property(e => e.Subid).HasColumnName("subid");

                entity.Property(e => e.Useremail)
                    .HasColumnName("useremail")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.Sub)
                    .WithMany(p => p.Reports)
                    .HasForeignKey(d => d.Subid)
                    .HasConstraintName("FK__reports__subid__1BFD2C07");

                entity.HasOne(d => d.UseremailNavigation)
                    .WithMany(p => p.Reports)
                    .HasForeignKey(d => d.Useremail)
                    .HasConstraintName("FK__reports__userema__1B0907CE");
            });

            modelBuilder.Entity<Subjects>(entity =>
            {
                entity.ToTable("subjects");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Description)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Subname)
                    .IsRequired()
                    .HasColumnName("subname")
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.HasKey(e => e.Email)
                    .HasName("PK__Users__A9D1053529421723");

                entity.Property(e => e.Email)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.City)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Dob)
                    .HasColumnName("DOB")
                    .HasColumnType("date");

                entity.Property(e => e.Name)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Qualification)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.State)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
