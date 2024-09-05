import request from "../utils/request"
import { store } from '../store/store.js';

// export const test = () => {
//   return request('/checkUserIdentityLevel', {},'GET',{  'Authorization': store.token},1)
// }
export const checkUserIdentityLevel = () => {
    return request('/checkUserIdentityLevel')
}
export const GetOnePropagandaInfopro_id = (pro_id) => {
    return request(`/GetOnePropagandaInfo/${pro_id}`)
}
export const GetOneNoticeInfonotice_id = (pro_id) => {
    return request(`/GetOneNoticeInfo/${pro_id}`)
}
export const getPersonInfo = () => {
    return request('/getPersonInfo')
}
export const getNoticeInfospageNum = (pageNum = 1) => {
    return request('/getNoticeInfos/' + pageNum)
}
export const cancelOrgIdentity = () => {
    return request('/cancelOrgIdentity',{},'post')
}
export const getLabelcity = () => {
    return request('/getLabel/city')
}
export const bossbossReadResume = (deliverId) => {
    return request('/boss/bossReadResume', {deliverId},"POST")
}

export const bossresumeManage = (deliverId,action) => {
    return request('/boss/resumeManage',{
      deliverId,
      action
    },"POST")
}
export const bossbossGetPublish = (bossGetPublish,type, pageNum) => {
    return request('/boss/bossGetPublish/'+ bossGetPublish+'/'+type + '/' + pageNum)
}
export const fuzzyQueryfuzzyName = (fuzzyName) => {
    if (!fuzzyName) return {data: {}}
    return request(`/fuzzyQueryAll/${fuzzyName}`)
}
export const FuzzyQueryJobInfos = (fuzzyName) => {
    if (!fuzzyName) return {data: {}}
    return request(`/fuzzyQueryAll/${fuzzyName}`)
}
export const bosschangeArtStatus = (artId,action) => {
    return request('/boss/changeArtStatus',{
      artId: artId+'',
      action: action == 1 ? 'appear' : 'hide'
    },'POST')
}
export const bossdeletePubArt = (artId) => {
    return request('/boss/deletePubArt',{
      artId: artId+'',
    },'POST')
}
export const fuzzyQueryCompanies = (FuzzyName, PageNum) => {
    return request('/fuzzyQueryCompanies',{
      fuzzy_name: FuzzyName + '',
      page_num: PageNum - 0,
    },'POST')
}
export const myfuzzyQueryJobInfos = (fuzzy_name, query_type, page_num) => {
    return request('/FuzzyQueryJobInfos',{
      fuzzy_name: fuzzy_name + '',
      query_type: query_type + '',
      page_num: page_num - 0
    },'POST')
}
export const bosspubEmployReq = (careerJobId,title,content,region,salaryMin,salaryMax, tags) => {
    return request('/boss/pubEmployReq',{
        careerJobId,title,content,region,salaryMin,salaryMax,tag_list: tags
    }, "post")
}
export const bossqueryResumeBasic = (username) => {
    return request(`/boss/queryResumeBasic/${username}`)
}
export const bossqueryResumeEdu = (username) => {
    return request(`/boss/queryResumeEdu/${username}`)
}
export const checkIfOneself = (toUid) => {
    return request(`/checkIfOneself`, {toUid: toUid}, "post")
}
export const bossbossGetPublishpass = (type = 'job', page = 1) => {
    return request(`/boss/bossGetPublish/${type}/pass/${page}`)
}
export const bossinviteDelivery = (artId,desUsername) => {
    return request(`/boss/inviteDelivery`, {
        artId,
        desUsername
    }, "post")
}
export const JobSearchProgress= (status, pagenum) => {
    return request(`/JobSearchProgress/${status}/${pagenum}`)
}
export const getPlaConnectionInfos= () => {
    return request(`/getPlaConnectionInfos`)
}
export const bossresumeDeliveries = (type, pageNum) => {
    return request(`/boss/resumeDeliveries/${type}/${pageNum}`)
}
export const getVipShowspageNum = ( pageNum) => {
    return request(`/getVipShows/${pageNum}`)
}
export const GetOneVipShowvip_id = (vip_id) => {
    return request(`/GetOneVipShow/${vip_id}`)
}
export const getCompanyPubLabel= (id,type) => {
    return request(`/getCompanyPubLabel/${id}/${type}`)
}
export const getPlaDescription = (type = 'platform') => {
  return request('/getPlaDescription/' + type)
}
export const bossgetCompanyInfo= () => {
    return request(`/boss/getCompanyInfo/`)
}
export const bossupdateCompanyHeadPic= (pic_url) => {
    return request(`/boss/updateCompanyHeadPic`,{pic_url},'POST')
}
export const bossupdateCompanyInfo= (scale_tag,person_scale,address, phone, description ) => {
    return request(`/boss/updateCompanyInfo`,{scale_tag,person_scale,address, phone, description },'POST')
}
export const getCompanyPub= (companyId,jobReqType='', pageNum, type) => {
    return request(`/GetCompanyPub`,{
        companyId,
        jobReqType,
        pageNum,
        type
    },"POST")
}
export const getJobInfo= (careerJobId,labelType, pageNum = 1,region = '') => {
    return request(`/getJobInfo`,{
        careerJobId: careerJobId + '',
        labelType: labelType + '',
        pageNum: pageNum + '',
        region: region + ''
    },"POST")
}
export const getCompanyInfo = (companyName) => {
    return request(`/getCompanyInfo/${companyName}`)
}
export const getRecommendLabels = () => {
    return request(`/getRecommendLabels`)
}
export const GetPropagandaInfos = () => {
    return request(`/GetPropagandaInfos`)
}
export const getInvitedJobs = (pageNum) => {
    return request(`/getInvitedJobs/${pageNum}`)
}
export const deleteInvitation = (invitationId) => {
    return request(`/deleteInvitation`,{invitationId},"post")
}
export const bossJobInfo = (type ,bossId, pageNum = 1) => {
    return request(`/bossJobInfo/${type}/${bossId}/${pageNum}`)
}
export const recordDockInfo = (art_id, boss_id, com_id) => {
    return request(`/recordDockInfo`, {
      art_id, boss_id, com_id
    }, 'post')
}
export const bossqueryEmployees = (jobLabel, gender ,minAge ,maxAge, minDegree, pageNum) => {
    return request('/boss/queryEmployees',{
        "jobLabel": jobLabel + '',
        "gender": gender + '',
        "minAge": minAge + '',
        "maxAge": maxAge + '',
        "minDegree": minDegree + '',
        "pageNum": pageNum + ''
    }, "post")
}
