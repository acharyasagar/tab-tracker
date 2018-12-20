import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Songs')
export class Song {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  artist: string;

  @Column()
  genre: string;

  @Column()
  album: string;

  @Column()
  albumImage: string;

  @Column()
  youtubeId: string;

  @Column('text')
  lyrics: string;

  @Column('text')
  tab: string
  
}
