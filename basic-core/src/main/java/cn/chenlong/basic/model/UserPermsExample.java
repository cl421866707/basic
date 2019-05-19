package cn.chenlong.basic.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class UserPermsExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public UserPermsExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andIdIsNull() {
            addCriterion("id is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("id is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(Long value) {
            addCriterion("id =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(Long value) {
            addCriterion("id <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(Long value) {
            addCriterion("id >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(Long value) {
            addCriterion("id >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(Long value) {
            addCriterion("id <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(Long value) {
            addCriterion("id <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<Long> values) {
            addCriterion("id in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<Long> values) {
            addCriterion("id not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(Long value1, Long value2) {
            addCriterion("id between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(Long value1, Long value2) {
            addCriterion("id not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andPermIdIsNull() {
            addCriterion("perm_id is null");
            return (Criteria) this;
        }

        public Criteria andPermIdIsNotNull() {
            addCriterion("perm_id is not null");
            return (Criteria) this;
        }

        public Criteria andPermIdEqualTo(Long value) {
            addCriterion("perm_id =", value, "permId");
            return (Criteria) this;
        }

        public Criteria andPermIdNotEqualTo(Long value) {
            addCriterion("perm_id <>", value, "permId");
            return (Criteria) this;
        }

        public Criteria andPermIdGreaterThan(Long value) {
            addCriterion("perm_id >", value, "permId");
            return (Criteria) this;
        }

        public Criteria andPermIdGreaterThanOrEqualTo(Long value) {
            addCriterion("perm_id >=", value, "permId");
            return (Criteria) this;
        }

        public Criteria andPermIdLessThan(Long value) {
            addCriterion("perm_id <", value, "permId");
            return (Criteria) this;
        }

        public Criteria andPermIdLessThanOrEqualTo(Long value) {
            addCriterion("perm_id <=", value, "permId");
            return (Criteria) this;
        }

        public Criteria andPermIdIn(List<Long> values) {
            addCriterion("perm_id in", values, "permId");
            return (Criteria) this;
        }

        public Criteria andPermIdNotIn(List<Long> values) {
            addCriterion("perm_id not in", values, "permId");
            return (Criteria) this;
        }

        public Criteria andPermIdBetween(Long value1, Long value2) {
            addCriterion("perm_id between", value1, value2, "permId");
            return (Criteria) this;
        }

        public Criteria andPermIdNotBetween(Long value1, Long value2) {
            addCriterion("perm_id not between", value1, value2, "permId");
            return (Criteria) this;
        }

        public Criteria andUserIdIsNull() {
            addCriterion("user_id is null");
            return (Criteria) this;
        }

        public Criteria andUserIdIsNotNull() {
            addCriterion("user_id is not null");
            return (Criteria) this;
        }

        public Criteria andUserIdEqualTo(Long value) {
            addCriterion("user_id =", value, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdNotEqualTo(Long value) {
            addCriterion("user_id <>", value, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdGreaterThan(Long value) {
            addCriterion("user_id >", value, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdGreaterThanOrEqualTo(Long value) {
            addCriterion("user_id >=", value, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdLessThan(Long value) {
            addCriterion("user_id <", value, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdLessThanOrEqualTo(Long value) {
            addCriterion("user_id <=", value, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdIn(List<Long> values) {
            addCriterion("user_id in", values, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdNotIn(List<Long> values) {
            addCriterion("user_id not in", values, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdBetween(Long value1, Long value2) {
            addCriterion("user_id between", value1, value2, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdNotBetween(Long value1, Long value2) {
            addCriterion("user_id not between", value1, value2, "userId");
            return (Criteria) this;
        }

        public Criteria andCreateTimeIsNull() {
            addCriterion("create_time is null");
            return (Criteria) this;
        }

        public Criteria andCreateTimeIsNotNull() {
            addCriterion("create_time is not null");
            return (Criteria) this;
        }

        public Criteria andCreateTimeEqualTo(Date value) {
            addCriterion("create_time =", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeNotEqualTo(Date value) {
            addCriterion("create_time <>", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeGreaterThan(Date value) {
            addCriterion("create_time >", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("create_time >=", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeLessThan(Date value) {
            addCriterion("create_time <", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeLessThanOrEqualTo(Date value) {
            addCriterion("create_time <=", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeIn(List<Date> values) {
            addCriterion("create_time in", values, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeNotIn(List<Date> values) {
            addCriterion("create_time not in", values, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeBetween(Date value1, Date value2) {
            addCriterion("create_time between", value1, value2, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeNotBetween(Date value1, Date value2) {
            addCriterion("create_time not between", value1, value2, "createTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeIsNull() {
            addCriterion("update_time is null");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeIsNotNull() {
            addCriterion("update_time is not null");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeEqualTo(Date value) {
            addCriterion("update_time =", value, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeNotEqualTo(Date value) {
            addCriterion("update_time <>", value, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeGreaterThan(Date value) {
            addCriterion("update_time >", value, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("update_time >=", value, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeLessThan(Date value) {
            addCriterion("update_time <", value, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeLessThanOrEqualTo(Date value) {
            addCriterion("update_time <=", value, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeIn(List<Date> values) {
            addCriterion("update_time in", values, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeNotIn(List<Date> values) {
            addCriterion("update_time not in", values, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeBetween(Date value1, Date value2) {
            addCriterion("update_time between", value1, value2, "updateTime");
            return (Criteria) this;
        }

        public Criteria andUpdateTimeNotBetween(Date value1, Date value2) {
            addCriterion("update_time not between", value1, value2, "updateTime");
            return (Criteria) this;
        }

        public Criteria andDeleteTimeIsNull() {
            addCriterion("delete_time is null");
            return (Criteria) this;
        }

        public Criteria andDeleteTimeIsNotNull() {
            addCriterion("delete_time is not null");
            return (Criteria) this;
        }

        public Criteria andDeleteTimeEqualTo(Date value) {
            addCriterion("delete_time =", value, "deleteTime");
            return (Criteria) this;
        }

        public Criteria andDeleteTimeNotEqualTo(Date value) {
            addCriterion("delete_time <>", value, "deleteTime");
            return (Criteria) this;
        }

        public Criteria andDeleteTimeGreaterThan(Date value) {
            addCriterion("delete_time >", value, "deleteTime");
            return (Criteria) this;
        }

        public Criteria andDeleteTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("delete_time >=", value, "deleteTime");
            return (Criteria) this;
        }

        public Criteria andDeleteTimeLessThan(Date value) {
            addCriterion("delete_time <", value, "deleteTime");
            return (Criteria) this;
        }

        public Criteria andDeleteTimeLessThanOrEqualTo(Date value) {
            addCriterion("delete_time <=", value, "deleteTime");
            return (Criteria) this;
        }

        public Criteria andDeleteTimeIn(List<Date> values) {
            addCriterion("delete_time in", values, "deleteTime");
            return (Criteria) this;
        }

        public Criteria andDeleteTimeNotIn(List<Date> values) {
            addCriterion("delete_time not in", values, "deleteTime");
            return (Criteria) this;
        }

        public Criteria andDeleteTimeBetween(Date value1, Date value2) {
            addCriterion("delete_time between", value1, value2, "deleteTime");
            return (Criteria) this;
        }

        public Criteria andDeleteTimeNotBetween(Date value1, Date value2) {
            addCriterion("delete_time not between", value1, value2, "deleteTime");
            return (Criteria) this;
        }

        public Criteria andBackup1IsNull() {
            addCriterion("backup1 is null");
            return (Criteria) this;
        }

        public Criteria andBackup1IsNotNull() {
            addCriterion("backup1 is not null");
            return (Criteria) this;
        }

        public Criteria andBackup1EqualTo(String value) {
            addCriterion("backup1 =", value, "backup1");
            return (Criteria) this;
        }

        public Criteria andBackup1NotEqualTo(String value) {
            addCriterion("backup1 <>", value, "backup1");
            return (Criteria) this;
        }

        public Criteria andBackup1GreaterThan(String value) {
            addCriterion("backup1 >", value, "backup1");
            return (Criteria) this;
        }

        public Criteria andBackup1GreaterThanOrEqualTo(String value) {
            addCriterion("backup1 >=", value, "backup1");
            return (Criteria) this;
        }

        public Criteria andBackup1LessThan(String value) {
            addCriterion("backup1 <", value, "backup1");
            return (Criteria) this;
        }

        public Criteria andBackup1LessThanOrEqualTo(String value) {
            addCriterion("backup1 <=", value, "backup1");
            return (Criteria) this;
        }

        public Criteria andBackup1Like(String value) {
            addCriterion("backup1 like", value, "backup1");
            return (Criteria) this;
        }

        public Criteria andBackup1NotLike(String value) {
            addCriterion("backup1 not like", value, "backup1");
            return (Criteria) this;
        }

        public Criteria andBackup1In(List<String> values) {
            addCriterion("backup1 in", values, "backup1");
            return (Criteria) this;
        }

        public Criteria andBackup1NotIn(List<String> values) {
            addCriterion("backup1 not in", values, "backup1");
            return (Criteria) this;
        }

        public Criteria andBackup1Between(String value1, String value2) {
            addCriterion("backup1 between", value1, value2, "backup1");
            return (Criteria) this;
        }

        public Criteria andBackup1NotBetween(String value1, String value2) {
            addCriterion("backup1 not between", value1, value2, "backup1");
            return (Criteria) this;
        }

        public Criteria andBackup2IsNull() {
            addCriterion("backup2 is null");
            return (Criteria) this;
        }

        public Criteria andBackup2IsNotNull() {
            addCriterion("backup2 is not null");
            return (Criteria) this;
        }

        public Criteria andBackup2EqualTo(String value) {
            addCriterion("backup2 =", value, "backup2");
            return (Criteria) this;
        }

        public Criteria andBackup2NotEqualTo(String value) {
            addCriterion("backup2 <>", value, "backup2");
            return (Criteria) this;
        }

        public Criteria andBackup2GreaterThan(String value) {
            addCriterion("backup2 >", value, "backup2");
            return (Criteria) this;
        }

        public Criteria andBackup2GreaterThanOrEqualTo(String value) {
            addCriterion("backup2 >=", value, "backup2");
            return (Criteria) this;
        }

        public Criteria andBackup2LessThan(String value) {
            addCriterion("backup2 <", value, "backup2");
            return (Criteria) this;
        }

        public Criteria andBackup2LessThanOrEqualTo(String value) {
            addCriterion("backup2 <=", value, "backup2");
            return (Criteria) this;
        }

        public Criteria andBackup2Like(String value) {
            addCriterion("backup2 like", value, "backup2");
            return (Criteria) this;
        }

        public Criteria andBackup2NotLike(String value) {
            addCriterion("backup2 not like", value, "backup2");
            return (Criteria) this;
        }

        public Criteria andBackup2In(List<String> values) {
            addCriterion("backup2 in", values, "backup2");
            return (Criteria) this;
        }

        public Criteria andBackup2NotIn(List<String> values) {
            addCriterion("backup2 not in", values, "backup2");
            return (Criteria) this;
        }

        public Criteria andBackup2Between(String value1, String value2) {
            addCriterion("backup2 between", value1, value2, "backup2");
            return (Criteria) this;
        }

        public Criteria andBackup2NotBetween(String value1, String value2) {
            addCriterion("backup2 not between", value1, value2, "backup2");
            return (Criteria) this;
        }

        public Criteria andBackup3IsNull() {
            addCriterion("backup3 is null");
            return (Criteria) this;
        }

        public Criteria andBackup3IsNotNull() {
            addCriterion("backup3 is not null");
            return (Criteria) this;
        }

        public Criteria andBackup3EqualTo(String value) {
            addCriterion("backup3 =", value, "backup3");
            return (Criteria) this;
        }

        public Criteria andBackup3NotEqualTo(String value) {
            addCriterion("backup3 <>", value, "backup3");
            return (Criteria) this;
        }

        public Criteria andBackup3GreaterThan(String value) {
            addCriterion("backup3 >", value, "backup3");
            return (Criteria) this;
        }

        public Criteria andBackup3GreaterThanOrEqualTo(String value) {
            addCriterion("backup3 >=", value, "backup3");
            return (Criteria) this;
        }

        public Criteria andBackup3LessThan(String value) {
            addCriterion("backup3 <", value, "backup3");
            return (Criteria) this;
        }

        public Criteria andBackup3LessThanOrEqualTo(String value) {
            addCriterion("backup3 <=", value, "backup3");
            return (Criteria) this;
        }

        public Criteria andBackup3Like(String value) {
            addCriterion("backup3 like", value, "backup3");
            return (Criteria) this;
        }

        public Criteria andBackup3NotLike(String value) {
            addCriterion("backup3 not like", value, "backup3");
            return (Criteria) this;
        }

        public Criteria andBackup3In(List<String> values) {
            addCriterion("backup3 in", values, "backup3");
            return (Criteria) this;
        }

        public Criteria andBackup3NotIn(List<String> values) {
            addCriterion("backup3 not in", values, "backup3");
            return (Criteria) this;
        }

        public Criteria andBackup3Between(String value1, String value2) {
            addCriterion("backup3 between", value1, value2, "backup3");
            return (Criteria) this;
        }

        public Criteria andBackup3NotBetween(String value1, String value2) {
            addCriterion("backup3 not between", value1, value2, "backup3");
            return (Criteria) this;
        }

        public Criteria andBackup4IsNull() {
            addCriterion("backup4 is null");
            return (Criteria) this;
        }

        public Criteria andBackup4IsNotNull() {
            addCriterion("backup4 is not null");
            return (Criteria) this;
        }

        public Criteria andBackup4EqualTo(String value) {
            addCriterion("backup4 =", value, "backup4");
            return (Criteria) this;
        }

        public Criteria andBackup4NotEqualTo(String value) {
            addCriterion("backup4 <>", value, "backup4");
            return (Criteria) this;
        }

        public Criteria andBackup4GreaterThan(String value) {
            addCriterion("backup4 >", value, "backup4");
            return (Criteria) this;
        }

        public Criteria andBackup4GreaterThanOrEqualTo(String value) {
            addCriterion("backup4 >=", value, "backup4");
            return (Criteria) this;
        }

        public Criteria andBackup4LessThan(String value) {
            addCriterion("backup4 <", value, "backup4");
            return (Criteria) this;
        }

        public Criteria andBackup4LessThanOrEqualTo(String value) {
            addCriterion("backup4 <=", value, "backup4");
            return (Criteria) this;
        }

        public Criteria andBackup4Like(String value) {
            addCriterion("backup4 like", value, "backup4");
            return (Criteria) this;
        }

        public Criteria andBackup4NotLike(String value) {
            addCriterion("backup4 not like", value, "backup4");
            return (Criteria) this;
        }

        public Criteria andBackup4In(List<String> values) {
            addCriterion("backup4 in", values, "backup4");
            return (Criteria) this;
        }

        public Criteria andBackup4NotIn(List<String> values) {
            addCriterion("backup4 not in", values, "backup4");
            return (Criteria) this;
        }

        public Criteria andBackup4Between(String value1, String value2) {
            addCriterion("backup4 between", value1, value2, "backup4");
            return (Criteria) this;
        }

        public Criteria andBackup4NotBetween(String value1, String value2) {
            addCriterion("backup4 not between", value1, value2, "backup4");
            return (Criteria) this;
        }

        public Criteria andBackup5IsNull() {
            addCriterion("backup5 is null");
            return (Criteria) this;
        }

        public Criteria andBackup5IsNotNull() {
            addCriterion("backup5 is not null");
            return (Criteria) this;
        }

        public Criteria andBackup5EqualTo(String value) {
            addCriterion("backup5 =", value, "backup5");
            return (Criteria) this;
        }

        public Criteria andBackup5NotEqualTo(String value) {
            addCriterion("backup5 <>", value, "backup5");
            return (Criteria) this;
        }

        public Criteria andBackup5GreaterThan(String value) {
            addCriterion("backup5 >", value, "backup5");
            return (Criteria) this;
        }

        public Criteria andBackup5GreaterThanOrEqualTo(String value) {
            addCriterion("backup5 >=", value, "backup5");
            return (Criteria) this;
        }

        public Criteria andBackup5LessThan(String value) {
            addCriterion("backup5 <", value, "backup5");
            return (Criteria) this;
        }

        public Criteria andBackup5LessThanOrEqualTo(String value) {
            addCriterion("backup5 <=", value, "backup5");
            return (Criteria) this;
        }

        public Criteria andBackup5Like(String value) {
            addCriterion("backup5 like", value, "backup5");
            return (Criteria) this;
        }

        public Criteria andBackup5NotLike(String value) {
            addCriterion("backup5 not like", value, "backup5");
            return (Criteria) this;
        }

        public Criteria andBackup5In(List<String> values) {
            addCriterion("backup5 in", values, "backup5");
            return (Criteria) this;
        }

        public Criteria andBackup5NotIn(List<String> values) {
            addCriterion("backup5 not in", values, "backup5");
            return (Criteria) this;
        }

        public Criteria andBackup5Between(String value1, String value2) {
            addCriterion("backup5 between", value1, value2, "backup5");
            return (Criteria) this;
        }

        public Criteria andBackup5NotBetween(String value1, String value2) {
            addCriterion("backup5 not between", value1, value2, "backup5");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}