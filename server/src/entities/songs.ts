import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('Songs')
export class Song {

  @PrimaryGeneratedColumn()
  public id: number

  @Column()
  public title: string

  @Column()
  public artist: string

  @Column()
  public genre: string

  @Column()
  public album: string

  @Column()
  public albumImage: string

  @Column()
  public youtubeId: string

  @Column('text')
  public lyrics: string

  @Column('text')
  public tab: string

}
