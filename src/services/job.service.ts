import { EntityRepository, Repository } from 'typeorm';
import { JobPosting } from './job-posting.entity';
import { JobApplication } from './job-application.entity';

@EntityRepository(JobPosting)
export class JobService extends Service {
  constructor(private readonly repo: Repository<JobPosting>) {
    super();
  }

  async getJobs(): Promise<JobPosting[]> {
    return await this.repo.find();
  }

  async createJob(job: JobPosting): Promise<JobPosting> {
    const existingJob = await this.repo.findOne({ where: { id: job.id } });
    if (existingJob) {
      throw new Error('A job with the same ID already exists');
    }
    return await this.repo.save(job);
  }

  async updateJob(id: number, job: Partial<JobPosting>): Promise<JobPosting> {
    const existingJob = await this.repo.findOne({ where: { id } });
    if (!existingJob) {
      throw new Error('Job not found');
    }
    return await this.repo.save(existingJob, { ...existingJob, ...job });
  }

  async deleteJob(id: number): Promise<void> {
    const existingJob = await this.repo.findOne({ where: { id } });
    if (!existingJob) {
      throw new Error('Job not found');
    }
    return await this.repo.remove(existingJob);
  }
}

@EntityRepository(JobApplication)
export class JobApplicationService extends Service {
  constructor(private readonly repo: Repository<JobApplication>) {
    super();
  }

  async getApplications(): Promise<JobApplication[]> {
    return await this.repo.find();
  }

  async createApplication(jobId: number, applicationDate: Date): Promise<JobApplication> {
    const existingApp = await this.repo.findOne({ where: { jobId } });
    if (existingApp) {
      throw new Error('An application with the same job ID already exists');
    }
    return await this.repo.save({ jobId, applicationDate });
  }

  async updateApplication(id: number, applicationDate: Date): Promise<JobApplication> {
    const existingApp = await this.repo.findOne({ where: { id } });
    if (!existingApp) {
      throw new Error('Application not found');
    }
    return await this.repo.save(existingApp, { ...existingApp, applicationDate });
  }

  async deleteApplication(id: number): Promise<void> {
    const existingApp = await this.repo.findOne({ where: { id } });
    if (!existingApp) {
      throw new Error('Application not found');
    }
    return await this.repo.remove(existingApp);
  }
}

class Service extends ServiceBase {
  constructor() {
    super();
  }

  async findMany(): Promise<any[]> {
    // todo
  }

  async save(entity: any): Promise<any> {
    // todo
  }

  async remove(id: number): Promise<void> {
    // todo
  }
}

class ServiceBase extends Service {
  constructor() {
    super();
  }
}