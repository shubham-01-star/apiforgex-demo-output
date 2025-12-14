import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JobPostingService } from '../services/job.service';
import { JobsRepository } from '../repositories/jobs.repository';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobPostingService: JobPostingService) {}

  @Get()
  async getJobs(): Promise<JobPosting[]> {
    return await this.jobPostingService.find();
  }

  @Post()
  async createJob(@Body() job: any): Promise<JobPosting> {
    const newJob = this.jobPostingService.create(job);
    return newJob;
  }

  @Get(':id')
  async getJob(@Param('id') id: number): Promise<JobPosting> {
    return await this.jobPostingService.findById(id);
  }

  @Patch(':id')
  async updateJob(
    @Param('id') id: number,
    @Body() job: any
  ): Promise<JobPosting> {
    const updatedJob = await this.jobPostingService.update(id, job);
    return updatedJob;
  }

  @Delete(':id')
  async deleteJob(@Param('id') id: number): Promise<void> {
    await this.jobPostingService.delete(id);
    return;
  }
}

// For future use of forwardRef()
import { ForwardRef } from '@nestjs/common';
import { JobService, ServiceForwardRef } from './job.service';

@Injectable({
  providedIn: 'root',
})
export class JobsController
  extends ServiceForwardRef(JobService) {
}