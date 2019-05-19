package cn.chenlong.basic.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class PermsExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public PermsExample() {
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

        public Criteria andPermNameIsNull() {
            addCriterion("perm_name is null");
            return (Criteria) this;
        }

        public Criteria andPermNameIsNotNull() {
            addCriterion("perm_name is not null");
            return (Criteria) this;
        }

        public Criteria andPermNameEqualTo(String value) {
            addCriterion("perm_name =", value, "permName");
            return (Criteria) this;
        }

        public Criteria andPermNameNotEqualTo(String value) {
            addCriterion("perm_name <>", value, "permName");
            return (Criteria) this;
        }

        public Criteria andPermNameGreaterThan(String value) {
            addCriterion("perm_name >", value, "permName");
            return (Criteria) this;
        }

        public Criteria andPermNameGreaterThanOrEqualTo(String value) {
            addCriterion("perm_name >=", value, "permName");
            return (Criteria) this;
        }

        public Criteria andPermNameLessThan(String value) {
            addCriterion("perm_name <", value, "permName");
            return (Criteria) this;
        }

        public Criteria andPermNameLessThanOrEqualTo(String value) {
            addCriterion("perm_name <=", value, "permName");
            return (Criteria) this;
        }

        public Criteria andPermNameLike(String value) {
            addCriterion("perm_name like", value, "permName");
            return (Criteria) this;
        }

        public Criteria andPermNameNotLike(String value) {
            addCriterion("perm_name not like", value, "permName");
            return (Criteria) this;
        }

        public Criteria andPermNameIn(List<String> values) {
            addCriterion("perm_name in", values, "permName");
            return (Criteria) this;
        }

        public Criteria andPermNameNotIn(List<String> values) {
            addCriterion("perm_name not in", values, "permName");
            return (Criteria) this;
        }

        public Criteria andPermNameBetween(String value1, String value2) {
            addCriterion("perm_name between", value1, value2, "permName");
            return (Criteria) this;
        }

        public Criteria andPermNameNotBetween(String value1, String value2) {
            addCriterion("perm_name not between", value1, value2, "permName");
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

        public Criteria andBackp1IsNull() {
            addCriterion("backp1 is null");
            return (Criteria) this;
        }

        public Criteria andBackp1IsNotNull() {
            addCriterion("backp1 is not null");
            return (Criteria) this;
        }

        public Criteria andBackp1EqualTo(String value) {
            addCriterion("backp1 =", value, "backp1");
            return (Criteria) this;
        }

        public Criteria andBackp1NotEqualTo(String value) {
            addCriterion("backp1 <>", value, "backp1");
            return (Criteria) this;
        }

        public Criteria andBackp1GreaterThan(String value) {
            addCriterion("backp1 >", value, "backp1");
            return (Criteria) this;
        }

        public Criteria andBackp1GreaterThanOrEqualTo(String value) {
            addCriterion("backp1 >=", value, "backp1");
            return (Criteria) this;
        }

        public Criteria andBackp1LessThan(String value) {
            addCriterion("backp1 <", value, "backp1");
            return (Criteria) this;
        }

        public Criteria andBackp1LessThanOrEqualTo(String value) {
            addCriterion("backp1 <=", value, "backp1");
            return (Criteria) this;
        }

        public Criteria andBackp1Like(String value) {
            addCriterion("backp1 like", value, "backp1");
            return (Criteria) this;
        }

        public Criteria andBackp1NotLike(String value) {
            addCriterion("backp1 not like", value, "backp1");
            return (Criteria) this;
        }

        public Criteria andBackp1In(List<String> values) {
            addCriterion("backp1 in", values, "backp1");
            return (Criteria) this;
        }

        public Criteria andBackp1NotIn(List<String> values) {
            addCriterion("backp1 not in", values, "backp1");
            return (Criteria) this;
        }

        public Criteria andBackp1Between(String value1, String value2) {
            addCriterion("backp1 between", value1, value2, "backp1");
            return (Criteria) this;
        }

        public Criteria andBackp1NotBetween(String value1, String value2) {
            addCriterion("backp1 not between", value1, value2, "backp1");
            return (Criteria) this;
        }

        public Criteria andBackp2IsNull() {
            addCriterion("backp2 is null");
            return (Criteria) this;
        }

        public Criteria andBackp2IsNotNull() {
            addCriterion("backp2 is not null");
            return (Criteria) this;
        }

        public Criteria andBackp2EqualTo(String value) {
            addCriterion("backp2 =", value, "backp2");
            return (Criteria) this;
        }

        public Criteria andBackp2NotEqualTo(String value) {
            addCriterion("backp2 <>", value, "backp2");
            return (Criteria) this;
        }

        public Criteria andBackp2GreaterThan(String value) {
            addCriterion("backp2 >", value, "backp2");
            return (Criteria) this;
        }

        public Criteria andBackp2GreaterThanOrEqualTo(String value) {
            addCriterion("backp2 >=", value, "backp2");
            return (Criteria) this;
        }

        public Criteria andBackp2LessThan(String value) {
            addCriterion("backp2 <", value, "backp2");
            return (Criteria) this;
        }

        public Criteria andBackp2LessThanOrEqualTo(String value) {
            addCriterion("backp2 <=", value, "backp2");
            return (Criteria) this;
        }

        public Criteria andBackp2Like(String value) {
            addCriterion("backp2 like", value, "backp2");
            return (Criteria) this;
        }

        public Criteria andBackp2NotLike(String value) {
            addCriterion("backp2 not like", value, "backp2");
            return (Criteria) this;
        }

        public Criteria andBackp2In(List<String> values) {
            addCriterion("backp2 in", values, "backp2");
            return (Criteria) this;
        }

        public Criteria andBackp2NotIn(List<String> values) {
            addCriterion("backp2 not in", values, "backp2");
            return (Criteria) this;
        }

        public Criteria andBackp2Between(String value1, String value2) {
            addCriterion("backp2 between", value1, value2, "backp2");
            return (Criteria) this;
        }

        public Criteria andBackp2NotBetween(String value1, String value2) {
            addCriterion("backp2 not between", value1, value2, "backp2");
            return (Criteria) this;
        }

        public Criteria andBackp3IsNull() {
            addCriterion("backp3 is null");
            return (Criteria) this;
        }

        public Criteria andBackp3IsNotNull() {
            addCriterion("backp3 is not null");
            return (Criteria) this;
        }

        public Criteria andBackp3EqualTo(String value) {
            addCriterion("backp3 =", value, "backp3");
            return (Criteria) this;
        }

        public Criteria andBackp3NotEqualTo(String value) {
            addCriterion("backp3 <>", value, "backp3");
            return (Criteria) this;
        }

        public Criteria andBackp3GreaterThan(String value) {
            addCriterion("backp3 >", value, "backp3");
            return (Criteria) this;
        }

        public Criteria andBackp3GreaterThanOrEqualTo(String value) {
            addCriterion("backp3 >=", value, "backp3");
            return (Criteria) this;
        }

        public Criteria andBackp3LessThan(String value) {
            addCriterion("backp3 <", value, "backp3");
            return (Criteria) this;
        }

        public Criteria andBackp3LessThanOrEqualTo(String value) {
            addCriterion("backp3 <=", value, "backp3");
            return (Criteria) this;
        }

        public Criteria andBackp3Like(String value) {
            addCriterion("backp3 like", value, "backp3");
            return (Criteria) this;
        }

        public Criteria andBackp3NotLike(String value) {
            addCriterion("backp3 not like", value, "backp3");
            return (Criteria) this;
        }

        public Criteria andBackp3In(List<String> values) {
            addCriterion("backp3 in", values, "backp3");
            return (Criteria) this;
        }

        public Criteria andBackp3NotIn(List<String> values) {
            addCriterion("backp3 not in", values, "backp3");
            return (Criteria) this;
        }

        public Criteria andBackp3Between(String value1, String value2) {
            addCriterion("backp3 between", value1, value2, "backp3");
            return (Criteria) this;
        }

        public Criteria andBackp3NotBetween(String value1, String value2) {
            addCriterion("backp3 not between", value1, value2, "backp3");
            return (Criteria) this;
        }

        public Criteria andBackp4IsNull() {
            addCriterion("backp4 is null");
            return (Criteria) this;
        }

        public Criteria andBackp4IsNotNull() {
            addCriterion("backp4 is not null");
            return (Criteria) this;
        }

        public Criteria andBackp4EqualTo(String value) {
            addCriterion("backp4 =", value, "backp4");
            return (Criteria) this;
        }

        public Criteria andBackp4NotEqualTo(String value) {
            addCriterion("backp4 <>", value, "backp4");
            return (Criteria) this;
        }

        public Criteria andBackp4GreaterThan(String value) {
            addCriterion("backp4 >", value, "backp4");
            return (Criteria) this;
        }

        public Criteria andBackp4GreaterThanOrEqualTo(String value) {
            addCriterion("backp4 >=", value, "backp4");
            return (Criteria) this;
        }

        public Criteria andBackp4LessThan(String value) {
            addCriterion("backp4 <", value, "backp4");
            return (Criteria) this;
        }

        public Criteria andBackp4LessThanOrEqualTo(String value) {
            addCriterion("backp4 <=", value, "backp4");
            return (Criteria) this;
        }

        public Criteria andBackp4Like(String value) {
            addCriterion("backp4 like", value, "backp4");
            return (Criteria) this;
        }

        public Criteria andBackp4NotLike(String value) {
            addCriterion("backp4 not like", value, "backp4");
            return (Criteria) this;
        }

        public Criteria andBackp4In(List<String> values) {
            addCriterion("backp4 in", values, "backp4");
            return (Criteria) this;
        }

        public Criteria andBackp4NotIn(List<String> values) {
            addCriterion("backp4 not in", values, "backp4");
            return (Criteria) this;
        }

        public Criteria andBackp4Between(String value1, String value2) {
            addCriterion("backp4 between", value1, value2, "backp4");
            return (Criteria) this;
        }

        public Criteria andBackp4NotBetween(String value1, String value2) {
            addCriterion("backp4 not between", value1, value2, "backp4");
            return (Criteria) this;
        }

        public Criteria andBackp5IsNull() {
            addCriterion("backp5 is null");
            return (Criteria) this;
        }

        public Criteria andBackp5IsNotNull() {
            addCriterion("backp5 is not null");
            return (Criteria) this;
        }

        public Criteria andBackp5EqualTo(String value) {
            addCriterion("backp5 =", value, "backp5");
            return (Criteria) this;
        }

        public Criteria andBackp5NotEqualTo(String value) {
            addCriterion("backp5 <>", value, "backp5");
            return (Criteria) this;
        }

        public Criteria andBackp5GreaterThan(String value) {
            addCriterion("backp5 >", value, "backp5");
            return (Criteria) this;
        }

        public Criteria andBackp5GreaterThanOrEqualTo(String value) {
            addCriterion("backp5 >=", value, "backp5");
            return (Criteria) this;
        }

        public Criteria andBackp5LessThan(String value) {
            addCriterion("backp5 <", value, "backp5");
            return (Criteria) this;
        }

        public Criteria andBackp5LessThanOrEqualTo(String value) {
            addCriterion("backp5 <=", value, "backp5");
            return (Criteria) this;
        }

        public Criteria andBackp5Like(String value) {
            addCriterion("backp5 like", value, "backp5");
            return (Criteria) this;
        }

        public Criteria andBackp5NotLike(String value) {
            addCriterion("backp5 not like", value, "backp5");
            return (Criteria) this;
        }

        public Criteria andBackp5In(List<String> values) {
            addCriterion("backp5 in", values, "backp5");
            return (Criteria) this;
        }

        public Criteria andBackp5NotIn(List<String> values) {
            addCriterion("backp5 not in", values, "backp5");
            return (Criteria) this;
        }

        public Criteria andBackp5Between(String value1, String value2) {
            addCriterion("backp5 between", value1, value2, "backp5");
            return (Criteria) this;
        }

        public Criteria andBackp5NotBetween(String value1, String value2) {
            addCriterion("backp5 not between", value1, value2, "backp5");
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