package com.niit.dao;

import java.util.List;

import com.niit.models.Job;

public interface JobDao {
void saveJob(Job job);
List<Job>   getAllJobs();
}
