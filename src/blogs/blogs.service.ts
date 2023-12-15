import { HttpCode, Injectable, Res } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Response } from 'express';
@Injectable()
export class BlogsService {
  private readonly blogs: Blog[] = [];

  create(blog: CreateBlogDto, @Res() res: Response) {
    if (this.blogs.some((existingBlog) => existingBlog.title === blog.title)) {
      return res
        .status(400)
        .send({ error: `Blog with title '${blog.title}' already exists` });
    }
    const createdBlog = { id: String(Date.now()), ...blog };
    this.blogs.push(createdBlog);
    return createdBlog;
  }

  findAll() {
    return this.blogs;
  }

  findOne(id: string) {
    return this.blogs.filter((blog) => blog.id == id);
  }

  update(id: string, blog: UpdateBlogDto) {
    const oldBlog = this.blogs.find((blog) => blog.id == id);
    const oldBlogIndex = this.blogs.indexOf(oldBlog);
    const updatedBlog = { ...oldBlog, ...blog };
    this.blogs.splice(oldBlogIndex, 1, updatedBlog);
    return updatedBlog;
  }

  remove(id: string) {
    const index = this.blogs.findIndex((blog) => blog.id == id);
    this.blogs.splice(index, 1);
  }
}
